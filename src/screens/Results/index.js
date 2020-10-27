import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState, useContext } from 'react';
import { Text, View, ScrollView, Alert } from 'react-native';

import Button from '../../components/Button';
import Loader from '../../components/Loader';

import { QuestionsContext } from '../../contexts/QuestionsContext';

import styles from './styles';
import CardAnsweredQuestions from './CardAnsweredQuestions';

function Results() {
  const navigation = useNavigation();

  const { questionsAnswered } = useContext(QuestionsContext);

  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    calculateScore();
    setIsLoading(false);
  });

  useEffect(() => {
    const unsubscribe = navigation.addListener(
      'beforeRemove',
      handleBeforeRemove
    );
    return unsubscribe;
  }, [navigation]);

  function handleBeforeRemove(e) {
    // Prevent default behavior of leaving the screen
    e.preventDefault();
    navigation.removeListener('beforeRemove', () => {});

    //swipe or back button
    if (e.data.action.type == 'POP' || e.data.action.type == 'GO_BACK') {
      // Prompt the user before leaving the screen
      Alert.alert(
        'Start new quiz?',
        'If you exit this screen, you will return to home page to start a new game. Are you sure?',
        [
          {
            text: 'Yes',
            style: 'destructive',
            // If the user confirmed, then we dispatch the action we blocked earlier
            // This will continue the action that had triggered the removal of the screen
            onPress: () => {
              navigateToHome();
            }
          },
          { text: 'No', style: 'cancel', onPress: () => {} }
        ]
      );
    } else {
      navigation.dispatch(e.data.action);
    }
  }

  function navigateToHome() {
    navigation.navigate('Home');
  }

  function calculateScore() {
    setScore(
      questionsAnswered.filter((question) => {
        return question.correct;
      }).length
    );
  }

  if (isLoading) {
    return <Loader />;
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.textScore}>
          You scored {'\n'} {score}/10
        </Text>

        <CardAnsweredQuestions questionsAnswered={questionsAnswered} />

        <Button text={'PLAY AGAIN?'} onPress={navigateToHome} />
      </View>
    );
  }
}

export default Results;

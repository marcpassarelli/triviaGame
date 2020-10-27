import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';
import { Text, TouchableOpacity, View, Alert } from 'react-native';

import { QuestionsContext } from '../../contexts/QuestionsContext';

import Loader from '../../components/Loader';

import styles from './styles';

function Quiz() {
  const navigation = useNavigation();

  const { questions, addQuestionAnswered } = useContext(QuestionsContext);

  const [questionNumber, setQuestionNumber] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = navigation.addListener(
      'beforeRemove',
      handleBeforeRemove
    );

    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    if (questions.length > 0) {
      setIsLoading(false);
    }
  }, [questions]);

  function handleBeforeRemove(e) {
    // Prevent default behavior of leaving the screen
    e.preventDefault();

    // Prompt the user before leaving the screen
    Alert.alert(
      'Leaving Quiz?',
      'If you exit the quiz, you will lose your answered questions. Are you sure you want to leave?',
      [
        { text: "Don't leave", style: 'cancel', onPress: () => {} },
        {
          text: 'Leave',
          style: 'destructive',
          // If the user confirmed, then we dispatch the action we blocked earlier
          // This will continue the action that had triggered the removal of the screen
          onPress: () => navigation.dispatch(e.data.action)
        }
      ]
    );
  }

  function answerQuestion(answer) {
    addQuestionAnswered(questionNumber, answer);
    if (questionNumber < 9) {
      setQuestionNumber(questionNumber + 1);
    } else {
      navigation.removeListener('beforeRemove', () => {});
      navigation.navigate('Results');
    }
  }

  if (isLoading) {
    return <Loader />;
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.textSubject}>
          {decodeURIComponent(questions[questionNumber].category)}
        </Text>

        <View style={styles.cardQuestion}>
          <Text style={styles.textQuestion}>
            {decodeURIComponent(questions[questionNumber].question)}
          </Text>
        </View>

        <View style={styles.containerButtons}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => answerQuestion('True')}
          >
            <Text style={styles.textButton}>True</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => answerQuestion('False')}
          >
            <Text style={styles.textButton}>False</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.textQuestionNumber}>
          {questionNumber + 1} of 10
        </Text>
      </View>
    );
  }
}

export default Quiz;

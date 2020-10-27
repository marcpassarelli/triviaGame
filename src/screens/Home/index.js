import React, { useState, useContext } from 'react';

import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Picker from '../../components/Picker';
import Button from '../../components/Button';

import styles from './styles';
import { QuizInfoContext } from '../../contexts/QuizInfoContext';
import { QuestionsContext } from '../../contexts/QuestionsContext';

function Home() {
  const difficulties = [
    {
      label: 'Easy',
      value: 'easy'
    },
    {
      label: 'Medium',
      value: 'medium'
    },
    {
      label: 'Hard',
      value: 'hard'
    }
  ];

  const { navigate } = useNavigation();

  const { saveInfoQuiz } = useContext(QuizInfoContext);
  const { loadQuestions, resetQuestions } = useContext(QuestionsContext);

  const [selectedDifficulty, setSelectedDifficulty] = useState('medium');

  function navigateToQuiz() {
    resetQuestions();
    saveInfoQuiz(selectedDifficulty);
    loadQuestions();
    navigate('Quiz');
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.textTitle]}>
        Welcome to the Trivia Challenge
      </Text>

      <Text style={styles.text}>
        You will be presented with 10 True or False Questions
      </Text>

      <Picker
        title={'Choose the difficulty'}
        items={difficulties}
        value={selectedDifficulty}
        setValue={setSelectedDifficulty}
        placeholder={{}}
      />
      <Text style={styles.text}>Can you score 100%?</Text>
      <Button text={'BEGIN'} onPress={navigateToQuiz} />
    </View>
  );
}

export default Home;

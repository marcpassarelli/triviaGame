import React from 'react';
import { Text, ScrollView, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import styles from './styles';

function CardAnsweredQuestions(props) {
  return (
    <ScrollView style={styles.containerAllQuestions}>
      {props.questionsAnswered.map((item, index) => {
        return (
          <View key={index} style={styles.containerSingleQuestion}>
            {item.correct ? (
              <AntDesign name="check" size={24} style={styles.correct} />
            ) : (
              <AntDesign name="close" size={24} style={styles.incorrect} />
            )}
            <Text
              style={[
                styles.textQuestion,
                item.correct ? styles.correct : styles.incorrect
              ]}
            >
              {decodeURIComponent(item.question)} (Correct answer:{' '}
              {item.correctAnswer})
            </Text>
          </View>
        );
      })}
    </ScrollView>
  );
}

export default CardAnsweredQuestions;

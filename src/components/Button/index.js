import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';

function Button(props) {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={[styles.text, styles.textButton]}>{props.text}</Text>
    </TouchableOpacity>
  );
}

export default Button;

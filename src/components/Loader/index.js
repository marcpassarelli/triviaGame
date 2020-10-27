import React from 'react';
import { Text, View, ActivityIndicator } from 'react-native';

import styles from './styles';

function Loader() {
  return (
    <View style={[styles.container, styles.containerLoading]}>
      <Text style={styles.textLoading}>Loading...</Text>
      <ActivityIndicator size="large" color="#000" />
    </View>
  );
}

export default Loader;

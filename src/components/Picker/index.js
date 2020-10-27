import RNPickerSelect from 'react-native-picker-select';
import React from 'react';
import { Text, View } from 'react-native';

import { Feather } from '@expo/vector-icons';

import styles, { pickerSelectStyles } from './styles';

function Picker(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.title}</Text>
      <RNPickerSelect
        useNativeAndroidPickerStyle={false}
        items={props.items}
        value={props.value}
        style={{
          ...pickerSelectStyles,
          placeholder: { color: '#000000' },
          iconContainer: {
            top: 10,
            right: 12
          }
        }}
        onValueChange={(value) => {
          props.setValue(value);
        }}
        placeholder={props.placeholder}
        Icon={() => {
          return <Feather name="chevron-down" size={24} color="gray" />;
        }}
      />
    </View>
  );
}

export default Picker;

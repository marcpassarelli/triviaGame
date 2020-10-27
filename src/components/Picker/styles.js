import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { width: '100%' },
  text: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10
  }
});
export default styles;

export const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    width: '100%',
    fontSize: 18,
    textAlign: 'center',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30 // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 18,
    textAlign: 'center',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30 // to ensure the text is never behind the icon
  }
});

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 40,
    backgroundColor: '#DCDCDC'
  },
  text: {
    fontSize: 20,
    textAlign: 'center'
  },
  textTitle: {
    fontWeight: 'bold'
  },
  textButton: {
    color: '#fff'
  },
  picker: {
    marginBottom: 30,
    height: 50,
    width: 200
  },
  button: {
    justifyContent: 'center',
    backgroundColor: '#000',
    height: 50,
    width: '80%',
    borderRadius: 8
  }
});

export default styles;

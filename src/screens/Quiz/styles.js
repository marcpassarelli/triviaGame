import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 30,
    backgroundColor: '#DCDCDC'
  },
  containerLoading: {
    justifyContent: 'center'
  },
  textLoading: { fontSize: 16, marginBottom: 10 },
  textSubject: {
    fontSize: 22,
    marginTop: 10
  },
  cardQuestion: {
    width: '100%',
    height: '35%',
    borderWidth: 2,
    padding: 20,
    justifyContent: 'center'
  },
  textQuestion: {
    fontSize: 20
  },
  containerButtons: {
    flexDirection: 'row'
  },
  button: {
    width: '48%',
    marginHorizontal: 5,
    padding: 20,
    elevation: 5,
    borderWidth: 2,
    alignItems: 'center',
    backgroundColor: '#C0C0C0'
  },
  textButton: {
    fontSize: 20
  },
  textQuestionNumber: {
    fontSize: 20
  }
});

export default styles;

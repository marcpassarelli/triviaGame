import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#DCDCDC',
    alignItems: 'center'
  },
  textScore: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },
  containerAllQuestions: {
    marginVertical: 20,
    borderWidth: 0.5,
    elevation: 2,
    paddingHorizontal: 15,
    paddingTop: 15
  },
  containerSingleQuestion: {
    flexDirection: 'row',
    marginBottom: 10,
    marginRight: 10,
    alignItems: 'center'
  },
  textQuestion: {
    flexShrink: 1,
    marginLeft: 5,
    fontSize: 18
  },
  correct: {
    color: '#006600'
  },
  incorrect: {
    color: '#FF0000'
  },
  button: {
    justifyContent: 'center',
    backgroundColor: '#000',
    height: 50,
    width: '80%',
    borderRadius: 8,
    alignSelf: 'center'
  },
  text: {
    fontSize: 20,
    textAlign: 'center'
  },
  textButton: {
    color: '#fff'
  }
});

export default styles;

export const getQuestions = (difficulty) => {
  return fetch(
    `https://opentdb.com/api.php?amount=10&encode=url3986&difficulty=${difficulty}&type=boolean`
  )
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson.results;
    })
    .catch((error) => {
      console.error(error);
    });
};

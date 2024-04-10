function handleResponseFromAPI(promise) {
  promise.then((response) => {
    console.log('Got a response from the API');
    return { status: 200, body: response };
  }).catch((error) => {
    console.error(error);
    return new Error();
  });
}
module.exports = handleResponseFromAPI;

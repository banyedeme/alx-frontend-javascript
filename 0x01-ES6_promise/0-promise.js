function getResponseFromAPI(resolvePromise = true) {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous API call
    setTimeout(() => {
      if (resolvePromise) {
        const responseData = {
          data: "Response from API",
          status: 200
        };
        resolve(responseData); // Resolve the promise with the response data
      } else {
        reject(new Error("Failed to fetch data from API")); // Reject the promise with an error
      }
    }, 2000); // Simulating a delay of 2 seconds
  });
}

module.exports = getResponseFromAPI;


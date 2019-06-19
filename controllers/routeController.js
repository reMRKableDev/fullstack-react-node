const axios = require("axios");

module.exports = {
  getDefaultLandingPage: (req, res) => {
    res.send({ express: "Hello from your server" });
  },
  getUsersFromApi: (req, res) => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(results => res.send(results.data))
      .catch(error =>
        console.error(`Something went wrong with axios fetch: ${error.stack}`)
      );
  }
};

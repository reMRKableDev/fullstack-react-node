const axios = require("axios");
const User = require("../database/models/User");

module.exports = {
  getDefaultLandingPage: (req, res) => {
    res.send({ express: "Hello from your server" });
  },
  getUsersFromApi: (req, res) => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(resultsFromApi => {
        // Get each user from resultsFromApi.data.
        // For each user, we should add them to the database using findOrCreate.
        let apiData = resultsFromApi.data;

        apiData.forEach(user => {
          //Send results to database to be saved.
          User.findOrCreate({
            where: {
              email: user.email
            },
            defaults: {
              name: user.name
            }
          })
            .then(resultsFromDataBase => {
              // Send data to the front end (React)
              res.send(resultsFromDataBase.dataValues);
            })
            .catch(error =>
              console.error(`Couldn't add new user: ${error.stack}`)
            );
        });
      })
      .catch(error =>
        console.error(`Something went wrong with axios fetch: ${error.stack}`)
      );
  }
};

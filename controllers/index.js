const axios = require("axios");
const db = require("../database/config/db.config");
const User = db.user;

module.exports = {
  getDefaultLandingPage: (req, res) => {
    res.send({ express: "Hello from your server" });
  },

  getUsersFromApi: (req, res) => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((resultsFromApi) => {
        const apiData = resultsFromApi.data;

        apiData.forEach((user) => {
          User.findOrCreate({
            where: { email: user.email },
            defaults: { name: user.name },
          })
            .then(() => console.log("Successfully saved users"))
            .catch((err) => console.error(`Couldn't save users: ${err.stack}`));
        });

        res.send(resultsFromApi.data);
      })
      .catch((error) =>
        console.error(`Something went wrong with axios fetch: ${error.stack}`)
      );
  },

  postNewUser: (req, res) => {
    console.log("User from frontend", req.body);

    const newUser = req.body;

    User.create({ name: newUser.name, email: newUser.email })
      .then((results) => {
        res.send(results.dataValues);
      })
      .catch((err) => console.error(`Couldn't save user: ${err.stack}`));
  },
};

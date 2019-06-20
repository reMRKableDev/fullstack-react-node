const express = require("express");

const app = express();
const port = process.env.PORT || 5000;

const {
  getDefaultLandingPage,
  getUsersFromApi,
  postNewUser
} = require("./controllers/routeController");

const { connector } = require("./database/config/dbConfig");

app.use(express.json());

app.get("/", getDefaultLandingPage);
app.get("/api/users", getUsersFromApi);
app.post("/api/newuser", postNewUser);

connector
  .sync({ force: true })
  .then(() => {
    app.listen(port, () => console.log(`I've got ears on port: ${port}`));
  })
  .catch(error =>
    console.error(
      `Something went wrong when connecting to database: ${error.stack}`
    )
  );

const express = require("express");

const app = express();
const port = process.env.PORT || 5000;

const {
  getDefaultLandingPage,
  getUsersFromApi
} = require("./controllers/routeController");

const { connector } = require("./database/configuration/dbConfig");

app.use(express.json());

app.get("/", getDefaultLandingPage);
app.get("/api/users", getUsersFromApi);

connector
  .sync({ force: true })
  .then(() => {
    app.listen(port, () => console.log(`Got ears on port: ${port}`));
  })
  .catch(error =>
    console.error(`Couldn't sync connector with server: ${error.stack}`)
  );

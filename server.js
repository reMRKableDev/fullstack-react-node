const express = require("express");

const app = express();
const port = process.env.PORT || 5000;

const {
  getDefaultLandingPage,
  getUsersFromApi
} = require("./controllers/routeController");

app.use(express.json());

app.get("/", getDefaultLandingPage);
app.get("/api/users", getUsersFromApi);

app.listen(port, () => console.log(`Got ears on port: ${port}`));

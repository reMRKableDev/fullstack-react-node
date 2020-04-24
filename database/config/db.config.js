require("dotenv").config();
const Sequelize = require("sequelize");

/* const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST } = process.env; */

const connector = new Sequelize(
  "mysql://x81y1hixyxhvzms9:baxfaajnno760i4r@fojvtycq53b2f2kx.chr7pe7iynqr.eu-west-1.rds.amazonaws.com:3306/smi9h2izeg08v9xu"
);

const authenticate = async (connector) => {
  try {
    await connector.authenticate();
    console.log(`Connection to db was good`);
  } catch (e) {
    console.error(`Something went wrong when connecting to db: ${e}`);
  }
};

authenticate(connector);

const db = {};

db.Sequelize = Sequelize;
db.connector = connector;
db.user = require("../models/user.model")(Sequelize, connector);

module.exports = db;

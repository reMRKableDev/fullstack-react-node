require("dotenv").config();

const Sequelize = require("sequelize");

const connector = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "postgres"
  }
);

connector
  .authenticate()
  .then(() =>
    console.log(`Got a connection with database: ${process.env.DB_NAME}`)
  )
  .catch(error =>
    console.error(`Couldn't connect to the database: ${error.stack}`)
  );

module.exports = { connector, Sequelize };

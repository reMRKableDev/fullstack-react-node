const { connector, Sequelize } = require("../config/dbConfig");

module.exports = connector.define("user", {
  name: Sequelize.STRING,
  email: Sequelize.STRING
});

const { connector, Sequelize } = require("../configuration/dbConfig");

module.exports = connector.define("user", {
  name: Sequelize.STRING,
  email: Sequelize.STRING
});

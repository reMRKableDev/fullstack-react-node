module.exports = (Sequelize, connector) => {
  const User = connector.define("user", {
    name: Sequelize.STRING,
    email: Sequelize.STRING,
  });

  return User;
};

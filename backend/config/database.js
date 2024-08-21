const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("TC01-TCC", "postgres", "1903", {
  host: "localhost",
  dialect: "postgres",
  port: 5433,
});

module.exports = sequelize;

const Sequelize = require('sequelize');

const sequelize = new Sequelize('app-product', 'root', 'good@123', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;

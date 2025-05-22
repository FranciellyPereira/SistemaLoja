// sequelize

const { Sequelize } = require('sequelize');

const connection = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  username: 'root',
  password: '',
  database: 'Loja', // descomente quando o banco existir
  timezone: '-03:00'
});

module.exports = connection;

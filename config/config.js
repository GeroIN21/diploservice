require('dotenv').config();
const fs = require('fs');

module.exports = {
  development: {
    username: 'user' || process.env.DB_USERNAME,
    password: 'pass' || process.env.DB_PASSWORD,
    database: 'db' || process.env.DB_NAME,
    host: '127.0.0.1' || process.env.DB_HOST,
    port: '3312' || process.env.DB_PORT,
    dialect: 'mysql'
  },
  test: {
    username: 'database_test',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    // dialectOptions: {
    //   ssl: {
    //     ca: fs.readFileSync(__dirname + '/mysql-ca-master.crt')
    //   }
    // }
  }
};
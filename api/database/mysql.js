require('dotenv').config();
const { DB_HOSTNAME, DATABASE, DB_USER, DB_PASSWORD } = process.env
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: DB_HOSTNAME,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DATABASE,
});

connection.connect((err) => {
  if (err) {
    console.log("Connection failed !!!", err);
  } else {
    console.log("Connected to MYSQL 8.x.x ...", DB_HOSTNAME);
  }
});

module.exports = connection;

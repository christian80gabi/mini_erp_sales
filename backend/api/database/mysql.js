const mysql = require("mysql");
require("dotenv/config");

const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

connection.connect((err) => {
  if (err) {
    console.log("Connection failed !!!", err);
  } else {
    console.log("Connected to MYSQL 8.0.19 ...");
  }
});

module.exports = connection;

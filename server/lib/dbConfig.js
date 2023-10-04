const mysql = require("mysql2");
require("dotenv").config();
const pool = mysql.createPool({
  host: process.env.HOST_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectionLimit: 10,
});

pool.getConnection((err, connection) => {
  if (err) {
    console.log("Error Connecting to database: ", err);
  } else {
    console.log("Connected to database.");
    connection.release();
  }
});

const promisePool = pool.promise();

module.exports = promisePool;

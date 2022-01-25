const mysql = require("mysql");

const Connection = mysql.createPool({
   host: "localhost",
   user: "root",
   password: "root",
   database: "erick_portfolio"
});

module.exports = Connection;
const mysql = require("mysql2");

const Connection = mysql.createPool({
   host: "127.0.0.1",
   user: "root",
   password: "root",
   database: "erick_portfolio",
   insecureAuth : true
});

module.exports = Connection;
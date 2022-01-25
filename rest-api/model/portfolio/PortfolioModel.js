const Connection = require("../../database/Connection");

class PortfolioModel {

   static findAll(portfolio) {
      return Connection.query("SELECT * FROM portfolio LIMIT 100", portfolio);
   }

   static findById(id, portfolio) {
      return Connection.query(`SELECT * FROM portfolio WHERE id_portfolio=${id}`, portfolio);
   }
}

module.exports = PortfolioModel;
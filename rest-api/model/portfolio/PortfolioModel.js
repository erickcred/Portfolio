const Connection = require("../../database/Connection");

class PortfolioModel {

   static findAll(call) {
      return Connection.query("SELECT * FROM portfolio LIMIT 100", call);
   }

   static findById(id, call) {
      return Connection.query(`SELECT * FROM portfolio WHERE id_portfolio=${id}`, call);
   }

   static create(portfolio, call) {
      return Connection.query(`INSERT INTO portfolio (descricao, detalhes) VALUES(${portfolio.descricao}, ${portfolio.detalhes})`, call);
   }

   static update(portfolio, id, call) {
      return Connection.query(`UPDATE portfolio descricao=${portfolio.descricao} detalhes=${portfolio.detalhes} WHERE id=${id}`, call)
   }
}

module.exports = PortfolioModel;
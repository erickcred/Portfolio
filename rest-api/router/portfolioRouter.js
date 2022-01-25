const express = require("express");
const router = express.Router();
const PortfolioModel = require("../model/portfolio/PortfolioModel");
const ResponseModel = require("../model/ResponseModel");

router.get("/", (req, res, next) => {
   PortfolioModel.findAll((erro, data) => {
      let response = new ResponseModel();
      
      if (erro) {
         response.erro = true;
         response.message = "Ocorreu um erro!";
         console.log(erro);
      } else {
         response.data = data;
      }

      res.json(response);
   });
});

router.get("/:id?", (req, res, next) => {
   const id = req.params.id;

   PortfolioModel.findById(id, (erro, data) => {
      let response = new ResponseModel();

      if (erro) {
         response.erro = true;
         response.message = "Ocorreu um erro ID";
         console.log(erro);
      } else {
         response.data = data
      }
      res.json(response);
   });

});

module.exports = router;
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

router.post("/", (req, res, next) => {
   const d = req.body;
   const descricao = req.body.detalhes;
   const detalhes = req.body.detalhes;

   PortfolioModel.create([descricao, detalhes], (erro, data) => {
      let response = new ResponseModel();

      if (erro) {
         response.erro = true;
         response.message = "Ocorreu um erro ao salvar os dados";
         console.log(erro);
      } else {
         if (data.affectedRows > 0) {
            response.message = `Cadatro realizado com sucesso! - ${data.affectedRows} dado inserido`;
            response.data = data;
         } else {
            response.erro = true;
            response.message = "Não foi possível realizar a operação"
         }
      }
      res.json(response);
   })
});

router.put("/:id", (req, res, next) => {

});

module.exports = router;
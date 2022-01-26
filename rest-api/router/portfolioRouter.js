const express = require("express");
const router = express.Router();
const PortfolioModel = require("../model/portfolio/PortfolioModel");
const ResponseModel = require("../model/ResponseModel");

router.get("/", (req, res, next) => {
   PortfolioModel.findAll((erro, data) => {
      let response = new ResponseModel();
      
      if (erro) {
         response.erro = true;
         response.message = "Ocorreu um erro!" + erro;
         console.log(erro);
      } else {
         response.data = data;
      }

      res.json(response);
   });
});

router.get("/lixeira", (req, res, next) => {
   PortfolioModel.findTrash((erro, data) => {
      let response = new ResponseModel();

      if (erro) {
         response.erro = true;
         response.message = "Erro ao buscar dados na lixeira";
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

   PortfolioModel.create(d, (erro, data) => {
      let response = new ResponseModel();

      if (erro) {
         response.erro = true;
         response.message = "Ocorreu um erro ao salvar os dados!";
         console.log(erro);
      } else {
         if (data.affectedRows > 0) {
            response.message = `Cadatro realizado com sucesso! - ${data.affectedRows} dado(s) inserido(s)`;
            response.data = data;
         } else {
            response.erro = true;
            response.message = "Não foi possível realizar a operação.";
         }
      }
      res.json(response);
   })
});

router.put("/:id", (req, res, next) => {
   
   PortfolioModel.update(req.body, req.params.id, (erro, data) => {
      let response = new ResponseModel();

      if (erro) {
         response.erro = true;
         response.message = "Erro ao atualizar o cadastro!" + erro;
         console.log(erro);
      } else {
         response.message = "Cadastro atualizado com sucesso!";
         response.data = data;
      }
      res.json(response);
   })
});

router.patch("/:id", (req, res, next) => {
   const id = req.params.id;

   PortfolioModel.trash(id, (erro, data) => {
      let response = new ResponseModel();

      if (erro) {
         response.erro = true;
         response.message = `Erro ao realizar a deleção do item ${id} ${erro}`;
         console.log(erro);
      } else {
         response.message = `Registro ${id} deletado com sucesso!`;
         response.data = data;
      }
      res.json(response)
   })
});

router.delete("/:id", (req, res, next) => {
   const id = req.params.id;

   PortfolioModel.delete(id, (erro, data) => {
      let response = new ResponseModel();

      if (erro) {
         response.erro = true;
         response.message = `Erro ao realizar a deleção do item ${id} ${erro}`;
         console.log(erro);
      } else {
         response.message = `Registro ${id} deletado com sucesso!`;
         response.data = data;
      }
      res.json(response)
   })
});

module.exports = router;
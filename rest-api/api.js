const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const api = express();
const port = 1010;

api.use(cors());
api.use(bodyParser.urlencoded( { extended: true }));
api.use(bodyParser.json());

api.get("/", (req, res) => {
   res.json({
      mensagem: "API está online!"
   });
});

// Routers
const portfolioRouter = require("./router/portfoliorouter");
api.use("/portfolio", portfolioRouter);


api.listen(port, (erro) => {
   if (erro) console.log(erro);
   console.log(`Servidor iniciado em http://localhost:${port}`)
});
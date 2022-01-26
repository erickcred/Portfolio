CREATE DATABASE erick_portfolio;

use erick_portfolio;

CREATE TABLE IF NOT EXISTS portfolio  (
   id_portfolio INTEGER NOT NULL AUTO_INCREMENT,
   descricao VARCHAR(255) NULL,
   detalhes TEXT NULL,
   PRIMARY KEY(id_portfolio)
);

-- INSERT INTO portfolio (descricao, detalhes) values
-- ("Desenvolvimento de Websites", "Tecnologias JavaScript, NodeJs, Express e MySQL"),
-- ("Desenvovimento de API's", "Tecnologias JavaScript, NodeJs, Express e MySQL");

--ALTER TABLE portfolio ADD COLUMN lixeira TINYINT NULL DEFAULT 0 AFTER detalhes;

SELECT * FROM erick_portfolio.portfolio LIMIT 100;
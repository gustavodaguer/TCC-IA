const sequelize = require("./config/database");
const Cliente = require("./models/Cliente");
const Fornecedor = require("./models/Fornecedor");
const Estoque = require("./models/Estoque");
const Venda = require("./models/Venda");
const ContasAReceber = require("./models/ContasAReceber");
const Pedido = require("./models/Pedido");
const ContasAPagar = require("./models/ContasAPagar");
const User = require("./models/User");

sequelize
  .sync({ force: true }) // Cuidado: force: true irá recriar as tabelas, apagando os dados existentes
  .then(() => {
    console.log("Tabelas criadas com sucesso!");
  })
  .catch((error) => {
    console.error("Erro ao sincronizar com o banco de dados:", error);
  });

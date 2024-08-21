const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Cliente = sequelize.define(
  "Cliente",
  {
    cpf: {
      type: DataTypes.STRING(11),
      allowNull: false,
      unique: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    endereco: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tipo: {
      type: DataTypes.ENUM("ouro", "prata", "bronze"),
      allowNull: false,
    },
    credito: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    tableName: "clientes",
    timestamps: false,
  }
);

module.exports = Cliente;

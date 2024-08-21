const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Estoque = sequelize.define(
  "Estoque",
  {
    codigoBarras: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    nomeProduto: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    unidadeMedida: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quantidadeEstoque: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    precoCusto: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    precoVenda: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    promocao: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },
    quantidadeMinima: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantidadeMaxima: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "estoque",
    timestamps: false,
  }
);

module.exports = Estoque;

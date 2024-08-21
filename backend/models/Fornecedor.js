const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Fornecedor = sequelize.define(
  "Fornecedor",
  {
    cnpj: {
      type: DataTypes.STRING(14),
      allowNull: false,
      unique: true,
    },
    razaoSocial: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    endereco: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telefone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    numeroParcelas: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "fornecedores",
    timestamps: false,
  }
);

module.exports = Fornecedor;

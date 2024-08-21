const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const ContasAReceber = sequelize.define(
  "ContasAReceber",
  {
    clienteId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "clientes",
        key: "id",
      },
    },
    dataVencimento: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    valorParcela: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    tableName: "contas_a_receber",
    timestamps: false,
  }
);

module.exports = ContasAReceber;

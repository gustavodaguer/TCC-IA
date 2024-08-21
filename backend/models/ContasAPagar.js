const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const ContasAPagar = sequelize.define(
  "ContasAPagar",
  {
    fornecedorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "fornecedores",
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
    tableName: "contas_a_pagar",
    timestamps: false,
  }
);

module.exports = ContasAPagar;

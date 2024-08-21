const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Pedido = sequelize.define(
  "Pedido",
  {
    fornecedorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "fornecedores",
        key: "id",
      },
    },
    telefoneFornecedor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    valorTotal: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    tableName: "pedidos",
    timestamps: false,
  }
);

module.exports = Pedido;

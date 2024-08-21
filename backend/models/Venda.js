const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Venda = sequelize.define(
  "Venda",
  {
    clienteId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "clientes",
        key: "id",
      },
    },
    enderecoEntrega: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dataVenda: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    valorTotal: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    tipoPagamento: {
      type: DataTypes.ENUM("cartao_credito", "cartao_debito", "pix", "loja"),
      allowNull: false,
    },
  },
  {
    tableName: "vendas",
    timestamps: false,
  }
);

module.exports = Venda;

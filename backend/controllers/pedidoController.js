const Pedido = require("../models/Pedido");
const ContasAPagar = require("../models/ContasAPagar");

exports.createPedido = async (req, res) => {
  const transaction = await Pedido.sequelize.transaction();
  try {
    const pedido = await Pedido.create(req.body, { transaction });

    const parcelas = req.body.parcelas || 1;
    const valorParcela = pedido.valorTotal / parcelas;

    for (let i = 0; i < parcelas; i++) {
      await ContasAPagar.create(
        {
          fornecedorId: pedido.fornecedorId,
          dataVencimento: new Date(
            pedido.dataPedido.setMonth(pedido.dataPedido.getMonth() + i)
          ),
          valorParcela,
        },
        { transaction }
      );
    }

    await transaction.commit();
    res.status(201).json(pedido);
  } catch (error) {
    await transaction.rollback();
    res.status(400).json({ error: error.message });
  }
};

exports.getPedidos = async (req, res) => {
  try {
    const pedidos = await Pedido.findAll();
    res.status(200).json(pedidos);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getPedidoById = async (req, res) => {
  try {
    const pedido = await Pedido.findByPk(req.params.id);
    if (pedido) {
      res.status(200).json(pedido);
    } else {
      res.status(404).json({ error: "Pedido não encontrado" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

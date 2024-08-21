const Venda = require("../models/Venda");
const ContasAReceber = require("../models/ContasAReceber");

exports.createVenda = async (req, res) => {
  const transaction = await Venda.sequelize.transaction();
  try {
    const venda = await Venda.create(req.body, { transaction });

    if (
      req.body.tipoPagamento === "loja" ||
      req.body.tipoPagamento === "cartao_credito"
    ) {
      const parcelas = req.body.parcelas || 1;
      const valorParcela = venda.valorTotal / parcelas;

      for (let i = 0; i < parcelas; i++) {
        await ContasAReceber.create(
          {
            clienteId: venda.clienteId,
            dataVencimento: new Date(
              venda.dataVenda.setMonth(venda.dataVenda.getMonth() + i)
            ),
            valorParcela,
          },
          { transaction }
        );
      }
    }

    await transaction.commit();
    res.status(201).json(venda);
  } catch (error) {
    await transaction.rollback();
    res.status(400).json({ error: error.message });
  }
};

exports.getVendas = async (req, res) => {
  try {
    const vendas = await Venda.findAll();
    res.status(200).json(vendas);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getVendaById = async (req, res) => {
  try {
    const venda = await Venda.findByPk(req.params.id);
    if (venda) {
      res.status(200).json(venda);
    } else {
      res.status(404).json({ error: "Venda não encontrada" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

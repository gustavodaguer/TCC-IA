const ContasAReceber = require("../models/ContasAReceber");

exports.getContasAReceber = async (req, res) => {
  try {
    const contas = await ContasAReceber.findAll();
    res.status(200).json(contas);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getContaAReceberById = async (req, res) => {
  try {
    const conta = await ContasAReceber.findByPk(req.params.id);
    if (conta) {
      res.status(200).json(conta);
    } else {
      res.status(404).json({ error: "Conta a receber não encontrada" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

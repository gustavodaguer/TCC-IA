const ContasAPagar = require("../models/ContasAPagar");

exports.getContasAPagar = async (req, res) => {
  try {
    const contas = await ContasAPagar.findAll();
    res.status(200).json(contas);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getContaAPagarById = async (req, res) => {
  try {
    const conta = await ContasAPagar.findByPk(req.params.id);
    if (conta) {
      res.status(200).json(conta);
    } else {
      res.status(404).json({ error: "Conta a pagar não encontrada" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const Fornecedor = require("../models/Fornecedor");

exports.createFornecedor = async (req, res) => {
  try {
    const fornecedor = await Fornecedor.create(req.body);
    res.status(201).json(fornecedor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getFornecedores = async (req, res) => {
  try {
    const fornecedores = await Fornecedor.findAll();
    res.status(200).json(fornecedores);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getFornecedorById = async (req, res) => {
  try {
    const fornecedor = await Fornecedor.findByPk(req.params.id);
    if (fornecedor) {
      res.status(200).json(fornecedor);
    } else {
      res.status(404).json({ error: "Fornecedor não encontrado" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateFornecedor = async (req, res) => {
  try {
    const fornecedor = await Fornecedor.findByPk(req.params.id);
    if (fornecedor) {
      await fornecedor.update(req.body);
      res.status(200).json(fornecedor);
    } else {
      res.status(404).json({ error: "Fornecedor não encontrado" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteFornecedor = async (req, res) => {
  try {
    const fornecedor = await Fornecedor.findByPk(req.params.id);
    if (fornecedor) {
      await fornecedor.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: "Fornecedor não encontrado" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

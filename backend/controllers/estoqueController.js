const Estoque = require("../models/Estoque");

exports.createProduto = async (req, res) => {
  try {
    const produto = await Estoque.create(req.body);
    res.status(201).json(produto);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getProdutos = async (req, res) => {
  try {
    const produtos = await Estoque.findAll();
    res.status(200).json(produtos);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getProdutoById = async (req, res) => {
  try {
    const produto = await Estoque.findByPk(req.params.id);
    if (produto) {
      res.status(200).json(produto);
    } else {
      res.status(404).json({ error: "Produto não encontrado" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateProduto = async (req, res) => {
  try {
    const produto = await Estoque.findByPk(req.params.id);
    if (produto) {
      await produto.update(req.body);
      res.status(200).json(produto);
    } else {
      res.status(404).json({ error: "Produto não encontrado" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteProduto = async (req, res) => {
  try {
    const produto = await Estoque.findByPk(req.params.id);
    if (produto) {
      await produto.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: "Produto não encontrado" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const express = require("express");
const estoqueController = require("../controllers/estoqueController");
const router = express.Router();

router.post("/estoque", estoqueController.createProduto);
router.get("/estoque", estoqueController.getProdutos);
router.get("/estoque/:id", estoqueController.getProdutoById);
router.put("/estoque/:id", estoqueController.updateProduto);
router.delete("/estoque/:id", estoqueController.deleteProduto);

module.exports = router;

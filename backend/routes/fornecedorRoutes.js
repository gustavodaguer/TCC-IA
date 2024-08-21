const express = require("express");
const fornecedorController = require("../controllers/fornecedorController");
const router = express.Router();

router.post("/fornecedores", fornecedorController.createFornecedor);
router.get("/fornecedores", fornecedorController.getFornecedores);
router.get("/fornecedores/:id", fornecedorController.getFornecedorById);
router.put("/fornecedores/:id", fornecedorController.updateFornecedor);
router.delete("/fornecedores/:id", fornecedorController.deleteFornecedor);

module.exports = router;

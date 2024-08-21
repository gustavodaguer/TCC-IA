const express = require("express");
const vendaController = require("../controllers/vendaController");
const router = express.Router();

router.post("/vendas", vendaController.createVenda);
router.get("/vendas", vendaController.getVendas);
router.get("/vendas/:id", vendaController.getVendaById);

module.exports = router;

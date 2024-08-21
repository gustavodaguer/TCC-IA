const express = require("express");
const pedidoController = require("../controllers/pedidoController");
const router = express.Router();

router.post("/pedidos", pedidoController.createPedido);
router.get("/pedidos", pedidoController.getPedidos);
router.get("/pedidos/:id", pedidoController.getPedidoById);

module.exports = router;

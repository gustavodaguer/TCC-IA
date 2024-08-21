const express = require("express");
const clienteController = require("../controllers/clienteController");
const router = express.Router();

router.post("/clientes", clienteController.createCliente);
router.get("/clientes", clienteController.getClientes);
router.get("/clientes/:id", clienteController.getClienteById);
router.put("/clientes/:id", clienteController.updateCliente);
router.delete("/clientes/:id", clienteController.deleteCliente);

module.exports = router;

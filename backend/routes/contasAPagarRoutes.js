const express = require("express");
const contasAPagarController = require("../controllers/contasAPagarController");
const router = express.Router();

router.get("/contas-a-pagar", contasAPagarController.getContasAPagar);
router.get("/contas-a-pagar/:id", contasAPagarController.getContaAPagarById);

module.exports = router;

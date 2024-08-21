const express = require("express");
const contasAReceberController = require("../controllers/contasAReceberController");
const router = express.Router();

router.get("/contas-a-receber", contasAReceberController.getContasAReceber);
router.get(
  "/contas-a-receber/:id",
  contasAReceberController.getContaAReceberById
);

module.exports = router;

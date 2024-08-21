const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const clienteRoutes = require("./routes/clienteRoutes");
const fornecedorRoutes = require("./routes/fornecedorRoutes");
const estoqueRoutes = require("./routes/estoqueRoutes");
const vendaRoutes = require("./routes/vendaRoutes");
const contasAReceberRoutes = require("./routes/contasAReceberRoutes");
const pedidoRoutes = require("./routes/pedidoRoutes");
const contasAPagarRoutes = require("./routes/contasAPagarRoutes");
const authRoutes = require("./routes/authRoutes");
const authMiddleware = require("./middleware/authMiddleware");

const app = express();
const PORT = 4321;

app.use(cors());

app.use(bodyParser.json());
app.use("/api/auth", authRoutes);
app.use("/api", authMiddleware, clienteRoutes);
app.use("/api", authMiddleware, fornecedorRoutes);
app.use("/api/estoque", authMiddleware, estoqueRoutes);
app.use("/api/vendas", authMiddleware, vendaRoutes);
app.use("/api/contas-a-receber", authMiddleware, contasAReceberRoutes);
app.use("/api/pedidos", authMiddleware, pedidoRoutes);
app.use("/api/contas-a-pagar", authMiddleware, contasAPagarRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

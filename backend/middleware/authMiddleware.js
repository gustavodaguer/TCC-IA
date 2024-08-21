const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  // Verifica se o cabeçalho Authorization existe
  const authHeader = req.header("Authorization");

  if (!authHeader) {
    return res.status(401).json({ error: "No token, authorization denied" });
  }

  // Extrai o token do cabeçalho Authorization
  const token = authHeader.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({ error: "No token, authorization denied" });
  }

  try {
    // Verifica o token usando o segredo armazenado em uma variável de ambiente
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "secrettoken");
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: "Token is not valid" });
  }
};

module.exports = authMiddleware;

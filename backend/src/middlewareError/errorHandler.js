const AppError = require("../utils/AppError");

function errorHandler(err, _req, res, _next) {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      ok: false,
      message: err.message,
    });
  }

  if (err.name === "SequelizeValidationError" || err.name === "SequelizeUniqueConstraintError") {
    const details = err.errors.map((e) => ({ field: e.path, message: e.message }));
    return res.status(400).json({
      ok: false,
      message: "Erro de validação no banco de dados.",
      details,
    });
  }

  if (err.name === "JsonWebTokenError" || err.name === "TokenExpiredError") {
    return res.status(401).json({
      ok: false,
      message: "Token inválido ou expirado.",
    });
  }

  console.error("[ERROR]", err);
  return res.status(500).json({
    ok: false,
    message: "Erro interno do servidor.",
  });
}

module.exports = errorHandler;

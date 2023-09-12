const { login } = require("../controller/Controller.login");
const router = require("express").Router();

// =====================================================
// Rutas para renderizar las vistas de login y registro
// =====================================================

router.get("/login", (req, res) =>
  res.render("/server/views/inicioRegistro/index.ejs")
);

// =====================================================
//         Rutas para autenticar y registrar usuarios
// =====================================================

router.post("/api/login", login);

module.exports = router;

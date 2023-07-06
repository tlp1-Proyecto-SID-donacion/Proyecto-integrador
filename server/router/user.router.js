const router = require("express").Router();

const {
  obtenerUsuarios,
  crearUsuario,
  obtenerUsuario,
  actualizarUsuario,
  eliminarUsuario,
} = require("../controllers/usuario.controllers");

const { validarJWT } = require("../middlewares/validar_jwt");






// ==========================================
//         Rutas para CRUD de usuarios
// ==========================================

// Ruta para obtener los datos de todos los usuarios
router.get("/api/usuarios/", [validarJWT], obtenerUsuarios);

// Ruta para obtener los datos de UN solo usuario
router.get("/api/usuario/:id", obtenerUsuario);

// Actualizar datos de un usuario
router.put("/api/usuario/:id", actualizarUsuario);

// Nuevo usuario
router.post("/api/usuario/", crearUsuario);

// Eliminar Usuario
router.delete("/api/usuario/:id", eliminarUsuario);

module.exports = router;

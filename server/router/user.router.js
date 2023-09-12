const router = require("express").Router();

const {
  obtenerUsuarios,
  crearUsuario,
  obtenerUsuario,
  actualizarUsuario,
  eliminarUsuario,
  viewIni,
  viewPagInfo,
  InicioRegistro,
} = require("../controller/Donante.controller");

// ==========================================
//              Rutas para views
// ==========================================

// Ruta para views del Inicio
router.get("/Inicio", viewIni);
// Ruta para la pagina informativa
router.get("/Info", viewPagInfo);
// Rutas Usuarios
router.get("/NuevoUsuario", InicioRegistro);

// ==========================================
//         Rutas para CRUD de usuarios
// ==========================================

// Ruta para obtener los datos de todos los usuarios
router.get("/api/usuarios/", obtenerUsuarios);

// Ruta para obtener los datos de UN solo usuario
router.get("/api/usuario/:id", obtenerUsuario);

// Actualizar datos de un usuario
router.put("/api/usuario/:id", actualizarUsuario);

// Nuevo usuario
router.post("/api/", crearUsuario);

// Eliminar Usuario
router.delete("/api/usuario/:id", eliminarUsuario);

module.exports = router;

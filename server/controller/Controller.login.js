const bcrypt = require("bcrypt");
const Usuario = require("../models/User");
const authCtrl = {};

authCtrl.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Verificar si el email existe
    const existeUsuario = await Usuario.findOne({ email });

    if (!existeUsuario) {
      return res.status(400).json({
        message: "El email no existe",
      });
    }

    // Verificar si el usuario está activo
    if (!existeUsuario.estado) {
      return res.status(400).json({
        message: "El usuario no está activo",
      });
    }

    // Verificar la contraseña
    const passwordValido = bcrypt.compareSync(password, existeUsuario.password);

    if (!passwordValido) {
      return res.status(400).json({
        message: "La contraseña no es válida",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error al iniciar sesión",
    });
  }
};

module.exports = authCtrl;

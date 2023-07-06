const { Router } = require("express");
const { rGet, rPut, rPost, rDelete } = require("../controller/controller");

const router = Router();

router.get("/Inicio", rGet);

router.get("/register", (req, res) =>
  res.render("../views/inicioRegistro/pruebas.ejs")
);



module.exports = router;

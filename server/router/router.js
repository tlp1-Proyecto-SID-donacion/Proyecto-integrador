const { Router } = require("express");
const { rGet, rPut, rPost, rDelete } = require("../controller/controller");

const router = Router();

router.get("/Inicio", rGet);

router.post("/Post", rPost);

router.put("/Put", rPut);

router.delete("/delete", rDelete);

module.exports = router;

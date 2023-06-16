const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const app = express();
require("dotenv").config();
require("ejs");

const port = process.env.port || 2000;

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(require("./router/router"));

app.use(express.static("public"));

// Configuración de motor de plantillas EJS
app.set("view engine", "ejs");

app.listen(5000, () => {
  console.log(`Server is running in http://localhost:${port}/Inicio`);
});

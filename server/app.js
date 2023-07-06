const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
const app = express();
require("dotenv").config();
require("ejs");

const port = process.env.port || 2000;

// Se importa la instancia de conexión a la base de datos - (debe ser después de leer las variables de entorno)
const { sequelize } = require("./kindSoulDB");

sequelize
  .authenticate()
  .then(() => console.log("Conexión a base de datos exitosa"))
  .catch((error) => console.log("Error al conectar a base de datos", error));

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(require("./router/User.router"));

// Archivos estáticos utilizando la librería path que viene en NodeJS
app.use(express.static(path.join(__dirname, "public")));

// Configuración de motor de plantillas EJS
app.set("view engine", "ejs");

app.listen(5000, () => {
  console.log(`Server is running in http://localhost:${port}/Inicio`);
});

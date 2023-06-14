const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const app = express();
require("dotenv").config();
const port = process.env.port;
// const router = require("./router/router");

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.use(require("./router/router"));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

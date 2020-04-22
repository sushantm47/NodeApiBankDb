const express = require("express");
const app = express();
const cors = require("cors");

const bodyParser = require("body-parser");

// imports
const rootRouter = require("./router/router");
const { Customer } = require("./db/models/customer.model");
const { mongoose } = require("./db/mongoose");

/*middleware*/
app.use(cors());
app.use(express.json());
app.use("/api", rootRouter);
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, x-access-token, x-refresh-token, _id"
  );

  res.header(
    "Access-Control-Expose-Headers",
    "x-access-token, x-refresh-token"
  );

  next();
});

app.get("/", (req, res) => {
  res.json({ msg: " root works" });
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`🚀 APIs available on http://localhost:${PORT}/api`);
});

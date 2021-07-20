const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = process.env.SERVER_PORT || 5000;
const customersRoutes = require("./routes/customer");

const allowCrosDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
};
app.use(allowCrosDomain);

// MYSQL DATABASE IMPORT
require("./database/mysql");

// MIDDLEWARES
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// ROUTES
app.use("/api/customers", customersRoutes);

// main ROUTE
app.get("/", (request, response) => {
  response.send(`API Express running on the port ${port}`);
});

// Listening PORT
app.listen(port, () => {
  console.log(`Server started on port ${port} ...`);
});

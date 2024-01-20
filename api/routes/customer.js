const express = require("express");
const Router = express.Router();

// MYSQL DATABASE IMPORT
const connection = require("../database/mysql");

/* Get all customers */
Router.get("/", (request, response) => {
  connection.query("SELECT * FROM `customers`", (err, rows, fields) => {
    if (err) throw err;

    console.log(rows);
    response.json(rows);
  });
});

/* Get one customer by ID */
Router.get("/:id", (request, response) => {
  const id = request.params.id;

  connection.query(
    "SELECT * FROM `customers` WHERE customer_id = " + id,
    (err, row, fields) => {
      if (err) throw err;

      console.log(row);
      response.json(row);
    }
  );
});

/* Add a new customer */
Router.post("/add", (request, response) => {
  const today = new Date();

  let day = today.getDate();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();

  if (day < 10) {
    day = "0" + day;
  }
  if (month < 10) {
    month = "0" + month;
  }

  const date = year + "-" + month + "-" + day;

  const customer_data = {
    customer_name: request.body.customer_name,
    customer_address: request.body.customer_address,
    customer_tel: request.body.customer_tel,
    customer_email: request.body.customer_email,
    customer_creation: date,
    customer_modification: date,
  };

  connection.query(
    "INSERT INTO `customers` SET ?",
    customer_data,
    (err, row) => {
      if (err) throw err;

      console.log("Adding a new customer successfully.");
      response.json({
        message: "Adding a new customer successfully.",
      });
    }
  );
});

/* Update an customer */
Router.post("/update/:id", (request, response) => {
  const id = request.params.id;

  const today = new Date();
  const date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  const customer_data = {
    customer_name: request.body.customer_name,
    customer_address: request.body.customer_address,
    customer_tel: request.body.customer_tel,
    customer_email: request.body.customer_email,
    customer_modification: date,
  };

  connection.query(
    "UPDATE customers SET ? WHERE customer_id = " + id,
    customer_data,
    (err, result) => {
      if (err) throw err;

      console.log(customer_data);
      console.log(`Updating customer with id = ${id} successfully`);
      response.json({
        message: `Updating customer with id = ${id} successfully`,
      });
    }
  );
});

/* Delete an customer */
Router.get("/delete/(:id)", (request, response) => {
  const id = request.params.id;

  connection.query(
    "DELETE FROM customers WHERE customer_id = " + id,
    (err, result) => {
      if (err) throw err;
      console.log(`Deleting people ${id} Successful`);
      response.json({
        message: "Deleting customer Successfully",
      });
    }
  );
});

module.exports = Router;

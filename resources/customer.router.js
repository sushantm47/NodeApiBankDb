const { Router } = require("express");

const {
  createCustomer,
  updateAmount,
  getUser,
} = require("./customer.controller");

const customerRouter = Router();

customerRouter.post("/create", createCustomer);
customerRouter.post("/transaction", updateAmount);
customerRouter.get("/user/:id", getUser);

customerRouter.get("/", (req, res) => {
  res.json({ msg: " It works !" });
});

module.exports = customerRouter;

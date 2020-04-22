const { Router } = require("express");

const customerRouter = require("../resources/customer.router");

const rootRouter = Router();

rootRouter.use("/customer", customerRouter);

module.exports = rootRouter;

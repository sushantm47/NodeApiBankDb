const { Customer } = require("../db/models/customer.model");

const createCustomer = async (req, res) => {
  const newCustomer = new Customer({
    ...req.body,
  });

  try {
    const savedCustomer = await newCustomer.save();
    res.json(savedCustomer);
  } catch (err) {
    res.status(500).json(err);
  }
};

const updateAmount = async (req, res) => {
  try {
    const { type, id } = req.query;
    const getUser = await Customer.findOne({ _id: id });
    if (getUser) {
      let { balance } = getUser;

      if (type === "WDRL") {
        balance -= req.body.amount;
        if (balance < 500) {
          return res.status(401).json({ msg: "Not enough money" });
        }
      } else if (type === "DPST") {
        balance += req.body.amount;
      } else {
        return res.status(500).json({ msg: "Invalid TXN type" });
      }

      const result = await Customer.updateOne(
        { _id: id },
        {
          $set: {
            balance: balance,
          },
        }
      );
      res.json(result);
    } else {
      res.status(401).json({ err: "Account not found" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

const getUser = async (req, res) => {
  try {
    const user = await Customer.findOne({ _id: req.params.id });
    res.json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  createCustomer,
  updateAmount,
  getUser,
};

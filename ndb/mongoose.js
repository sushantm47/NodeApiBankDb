const mongoose = require("mongoose");
require("dotenv/config");
mongoose.Promise = global.Promise;
mongoose
  .connect(process.env.DB_Connection, { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to db !!");
  })
  .catch((e) => {
    console.log("Errorr");
    console.log(e);
  });

mongoose.set("useCreateIndex", true);
mongoose.set("useFindAndModify", false);

module.exports = {
  mongoose,
};

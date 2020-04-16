const mongoose = require("mongoose");

const CricketSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
  },
  jdate: {
    type: Date,
    required: true,
  },
  bdate: {
    type: Date,
    required: true,
  },
});

const Cricket = mongoose.model("Cricket", CricketSchema);
module.exports = { Cricket };

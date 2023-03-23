const mongoose = require("mongoose");

// const Schema = mongoose.Schema;
let employeeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true
    },
    message: {
      type: String,
      required: true
    },
  },
  { collection: "Users" }
);

// module.exports = mongoose.model("users", user);
const Contactus = new mongoose.model("Contactus", employeeSchema);

module.exports = Contactus;
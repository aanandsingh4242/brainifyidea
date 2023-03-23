const mongoose = require("mongoose");

// const Schema = mongoose.Schema;
let employeeSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    isEmailVerified: {
      type: Boolean,
      default: false
    }
  },
  { collection: "Users" }
);

// module.exports = mongoose.model("users", user);
const Signup = new mongoose.model("Signup", employeeSchema);

module.exports = Signup;
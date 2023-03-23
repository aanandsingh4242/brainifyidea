const express = require("express");
// const axios = require("axios");
const path = require("path");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("./conn/dbcon")
const Register = require("./models/user");
// const Register = require("./models/contactuser");
const port = process.env.PORT || 4001;
const moment = require("moment");

// const static_path = path.join(__dirname, "../public");
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/mySignupLoginDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, () => {
  console.log("DB connected")
})

// mongoose.connect("mongodb://127.0.0.1:27017/contactUsUserDB", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }, () => {
//   console.log("DB connected")
// })

const d = new Date();
console.log(d)
console.log(moment().format('MMM DD YYYY, HH:mm:ss'));

const userSchema = new mongoose.Schema({
  fullName: String,
  username: String,
  email: String,
  password: String
})
const User = new mongoose.model("User", userSchema)

//schema of contact user
// const contactUserSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   subject: String,
//   message: String
// })
// const Contactuser = new mongoose.model("Contactuser", contactUserSchema)

//Routes
app.post("/login", (req, res) => {
  const { username, password } = req.body
  User.findOne({username: username}, (err, user) => {
    if(user){
      if(password === user.password){
        res.send({message: "Login Successfull", user: user})
      } else{
        res.send({message: "Password didn't match"})
      }
    } else{
      res.send({message: "User not registered"})
    }
  })
});

app.post("/signup", (req, res) => {
  const { fullName, username, email, password } = req.body
  User.findOne({email: email}, (err, user) => {
    if(user) {
      res.send({ message: "User already registered" })
    } else {
      const user = new User({
        fullName,
        username,
        email,
        password
      })
      user.save(err => {
        if(err) {
          res.send(err)
        } else {
          res.send({ message: "Successfully Signup" })
        }
      })
    }
  })

});

// app.post("/contactus", (req, res) => {
//   const { name, email, subject, message } = req.body
//   User.findOne((err, contactUser) => {
//     const contactUser = new User({
//       name,
//       email,
//       subject,
//       message
//     })
//       contactUser.save(err => {
//         if(err) {
//           res.send(err)
//         } else {
//           res.send({ message: "Successfully Sent" })
//         }
//       })
//     })
// });
// // app.get("/signup", (req, res) => {
//   res.send("Hello this is testing api signup page")
// });

// app.get("/login", (req, res) => {
//   res.send("Hello this is testing api login page")
// });

app.get("*", (req, res) => {
  res.send("404 error page not found")
});

app.listen(port, () => {
  console.log(`Server is running at port no: ${port}`);
});


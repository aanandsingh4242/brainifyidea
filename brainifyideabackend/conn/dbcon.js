// Import the mongoose module
const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost:27017/signup", {
//     useNewUrlParser: true, 
//     useUnifiedTopology: true,
//     useCreateIndex: true
// }).then(() => {
//     console.log(`connection successful`);
// }).catch((e) => {
//     console.log(`no connection`);
// })
// Set up default mongoose connection
// const mongoDB = process.env.MONGOURL;
// mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

// // Get the default connection
// const db = mongoose.connection;

// // Bind connection to error event (to get notification of connection errors)
// db.on("error", console.error.bind(console, "MongoDB connection error:"));

const mongoose = require("mongoose");
require("dotenv").config();

const connectDb = () => {
  return mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Database connection successful");
    })
    .catch((err) => {
      console.error("Database connection error", err);
    });
};

module.exports = connectDb;

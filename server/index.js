const express = require("express");
var cors = require("cors");
const app = express();
const userRoute = require("./routes/user");
//const User = require("./models/User");
//const bcrypt = require("bcrypt");
//const jwt = require("jsonwebtoken");
require("dotenv").config();
const connectDb = require("../server/db/connect");

//const bcryptSalt = bcrypt.genSaltSync(10);
//const jwtSecret = "1234";
connectDb();

app.use(express.json());

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

app.use("/user", userRoute),
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });

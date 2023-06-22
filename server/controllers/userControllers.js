const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = process.env.JWT_SECRET;

const register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userDoc = await User.create({
      name,
      email,
      password: bcrypt.hashSync(password, bcryptSalt),
    });
    res.json({ message: "User created succesfully", userDoc });
  } catch (error) {
    res.status(422).json(error);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const userDoc = await User.findOne({ email });

  if (!userDoc) {
    return res.status(404).json({ message: "User Not found" });
  }

  const passwrdCorrect = bcrypt.compareSync(password, userDoc.password);

  if (!passwrdCorrect) {
    return res.status(422).json({ message: "Incorrect password!" });
  }

  jwt.sign(
    {
      email: userDoc.email,
      id: userDoc._id,
    },
    jwtSecret,
    {},
    (err, token) => {
      if (err) {
        return res.status(500).json({ message: "Error generating Token" });
      }
      res.cookie("token", token).json({
        name: userDoc.name,
        email: userDoc.email,
        id: userDoc._id,
      });
    }
  );
};

module.exports = { login, register };

const express = require("express");
var cors = require("cors");
const app = express();

app.use(express.json());

app.use(
  cors({
    credentials: true,
    origin: "http://127.0.0.1:5173",
  })
);

app.get("/test", (req, res) => {
  res.json("Test Ok!");
});

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  res.json({ name, email, password });
});

app.listen(3000);

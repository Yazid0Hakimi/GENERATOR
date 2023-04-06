require("dotenv").config();
const PORT = process.env.PORT;
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cors());
app.use(express.json()); // for parsing application/json


app.get("/get", (req, res) => {
  res.send(gross);
  console.log(req.path);
});

app.post("/post", (req, res) =>{ 
  const gg = req.body;
  console.log(gg);
  res.send(gg);
});

app.listen(PORT, () => {
  console.log(`Server listening on port  ${PORT}`);
});

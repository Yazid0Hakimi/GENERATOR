const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const axios = require("axios");

const app = express();

// app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cors());
app.use(express.json()); // for parsing application/json

require("dotenv").config();
// env variables
const PORT = process.env.PORT;
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

app.get("/get", (req, res) => {
  res.send(gross);
  console.log(req.path);
});

app.post("/post", async (req, res) => {
  const input = req.body.data;
  const URL = ` https://api.spotify.com/v1/search?q=artist:${input}&type=track`;
  
  try {
    const response = await axios.get(URL, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
    });
    console.log(response.data);
    res.send(response.data);
  } catch (error) {
    console.log(error);
  }
  console.log(URL);
});

app.listen(PORT, () => {
  console.log(`Server listening on port  ${PORT}`);
});

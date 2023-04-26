const cors = require("cors");
const express = require("express");
const axios = require("axios");

const app = express();

// for parsing application/json
app.use(express.json());

app.use(cors());

require("dotenv").config();
// env variables
const PORT = process.env.PORT;

// this ligne is how things should be the access token shouls be in the env variable 
// but since the access token expires every 3600 sec I did a script get new Token and update 
// the env variable "ACCESS_TOKEN"

const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

// route to get the ui request from react app and send table of artist Track data
app.post("/post", async (req, res) => {
  const input = req.body.data;
  const URL = `https://api.spotify.com/v1/search?q=artist:${input}&type=track`;

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

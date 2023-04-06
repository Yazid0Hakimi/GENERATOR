require("dotenv").config();

const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cors());
app.use(express.json()); // for parsing application/json

const PORT = process.env.PORT || 5000;
const dbUrl =
  process.env.access_token ||
  "BQDqz3yYJYKTnXYcXcR7glGp9sglDKeKMZNy0jfq9jGTYWvd13t1wSvC0s1CSAyTmtZVvG41YLR1SjJY8Ell5zvM4vP6GhZlGBDzPo4C51zwnsRRTic5";

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

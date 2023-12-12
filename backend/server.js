const express = require("express");
require("dotenv").config();

const app = express();

app.get("/", (req, res) => {
  res.json({ mssg: "Hello From the other side" });
});

app.listen(process.env.PORT, () => {
  console.log("Listening to Port 4000");
});

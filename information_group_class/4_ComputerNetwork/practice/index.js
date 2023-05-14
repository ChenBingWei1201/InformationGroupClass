const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/p", (req, res) => {
  res.send("post page");
});

app
  .route("/login")
  .get((req, res) => {
    res.send("login get");
  })
  .post((req, res) => {
    res.send("login post");
  });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
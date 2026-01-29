const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Color API running on Kubernetes 🚀");
});

app.listen(80, () => {
  console.log("Server running on port 80");
});


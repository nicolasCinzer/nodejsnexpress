const { response } = require("express");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  response.send("");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

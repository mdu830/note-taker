const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
require("./routes/APIroute")(app);
require("./routes/HTMLroute")(app);

app.listen(PORT, () => {
  console.log("App listening on PORT: " + PORT);
});
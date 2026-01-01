const express = require("express");
const app = express();
const port = 3000;

app.use("/static", express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set("views", __dirname + "/src/views");
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`Ejecutando en el puerto ${port}`);
});

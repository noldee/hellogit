const express = require("express");
const app = express();
const port = 3000;

app.use("/static", express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set("views", __dirname + "/views");
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index");
});

// 404 — EXPRESS 5
app.use((req, res) => {
  res.status(404).render("404");
});

app.listen(port, () => {
  console.log(`Ejecutando en el puerto ${port}`);
});

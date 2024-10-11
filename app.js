const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Professor = require("./models/professors");
const Society = require("./models/societies");
const path = require("path");
const methodOverride = require("method-override");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "/public")));

main()
  .then(() => {
    console.log("connection established");
  })
  .catch((err) => {
    console.log(err);
  });
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/CampusMitra");
}

app.get("/", async (req, res) => {
  let datas = await Professor.find();
  res.render("main.ejs", { datas });
});

app.get("/societies", async (req, res) => {
  let datas = await Society.find();
  res.render("socities.ejs", { datas });
});

app.get("/home", (req, res) => {
  // let datas = await Society.find();
    res.render("Home.ejs");
  
});

app.listen(8080, (req, res) => {
  console.log("port is listening on 8080");
});

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Professor = require("./models/professors");
const Society = require("./models/societies");
const Teacher = require("./models/teachers");
const Subject = require("./models/subjects");
const Accommodation = require("./models/accommodation");
const ExamInfo = require("./models/exam");
const BuySellItem = require("./models/buy");

//for socket io
const http = require("http");
const socketIo = require("socket.io");

const path = require("path");
const methodOverride = require("method-override");
const server = http.createServer(app);
const io = socketIo(server);

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

// Socket.io connection
io.on("connection", (socket) => {
  console.log("New user connected: ", socket.id);

  // Listen for messages from clients
  socket.on("chatMessage", (msg) => {
    io.emit("chatMessage", msg); // Broadcast message to all connected users
  });

  // Listen for peer-to-peer signaling
  socket.on("signal", (signal) => {
    socket.broadcast.emit("signal", signal); // Send signaling data to peers
  });

  // Handle disconnect
  socket.on("disconnect", () => {
    console.log("User disconnected: ", socket.id);
  });
});

app.get("/peer", (req, res) => {
  // let datas = await Society.find();
  res.render("peerconnect.ejs");
});
app.get("/", async (req, res) => {
  let datas = await Professor.find();
  res.render("main.ejs", { datas });
});

app.get("/societies", async (req, res) => {
  let datas = await Society.find();
  res.render("socities.ejs", { datas });
});

app.post("/home", (req, res) => {
  const { branch, semester } = req.body;
  console.log(`Branch: ${branch}, Semester: ${semester}`);
  
  res.render("Home.ejs",{branch , semester});
});

app.get("/professors-reviews/:branch/:semester", async (req, res) => {
  let {branch , semester} = req.params;
  let teachers = await Teacher.find({ branch: branch, semester: semester });
  res.render("teachers.ejs", { teachers });
});

app.get("/View-subjects/:branch/:semester", async (req, res) => {
  let {branch , semester} = req.params;
  let subjects = await Subject.find({ branch: branch, semester: semester });
  res.render("subject.ejs", { subjects });
});

app.get("/View-accommodations", async (req, res) => {
  let accommodations = await Accommodation.find();
  res.render("accommodation.ejs", { accommodations });
});

app.get("/View-exam-info/:branch/:semester", async (req, res) => {
  let {branch , semester} = req.params;
  let exams = await ExamInfo.find( {branch: branch, semester: semester});
  res.render("exam.ejs", { exams });
});
app.get("/BuyandSell", async (req, res) => {
  let items = await BuySellItem.find();
  res.render("buy.ejs", { items });
});

server.listen(8080, (req, res) => {
  console.log("port is listening on 8080");
});

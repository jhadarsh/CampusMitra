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
const http = require('http');
const socketIo = require('socket.io');

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
io.on('connection', (socket) => {
  console.log('New user connected: ', socket.id);

  // Listen for messages from clients
  socket.on('chatMessage', (msg) => {
      io.emit('chatMessage', msg); // Broadcast message to all connected users
  });

  // Listen for peer-to-peer signaling
  socket.on('signal', (signal) => {
      socket.broadcast.emit('signal', signal); // Send signaling data to peers
  });

  // Handle disconnect
  socket.on('disconnect', () => {
      console.log('User disconnected: ', socket.id);
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

app.get("/home", (req, res) => {
  // let datas = await Society.find();
    res.render("Home.ejs");
  
});

app.get("/professors-reviews", async (req,res)=>{
  let teachers = await Teacher.find();
  res.render("teachers.ejs" , {teachers});
})

app.get("/View-subjects", async (req,res)=>{
  let subjects = await Subject.find();
  res.render("subject.ejs" , {subjects});
})

app.get("/View-accommodations", async (req,res)=>{
  let accommodations = await Accommodation.find();
  res.render("accommodation.ejs" , {accommodations});
})

app.get("/View-exam-info", async (req,res)=>{
  let exams = await ExamInfo.find();
  res.render("exam.ejs" , {exams});
})
app.get("/BuyandSell", async (req,res)=>{
  let items = await BuySellItem.find();
  res.render("buy.ejs" , { items });
})

server.listen(8080, (req, res) => {
  console.log("port is listening on 8080");
});

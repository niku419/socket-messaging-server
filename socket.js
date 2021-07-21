const express = require('express')
const app = require("express")();
const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer);
const cors = require('cors')

app.use(cors({origin: '*'}))
app.use(express.static("public"))
app.get("/", function (req, res) {
  res.send("<h1>Welcome to react socket chat app</h1>")
})
io.on("connection", socket => { 
  socket.on('message',({name, message}) =>{
    io.emit('message',{name,message})
  })
});

const port = process.env.PORT || 3001 
httpServer.listen(port,() => console.log("server started"));
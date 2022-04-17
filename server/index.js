import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
// import socketHandler from './handlers/socket.js';
import cors from 'cors';

const filename = fileURLToPath(import.meta.url);
const __dirname = dirname(filename);

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
  }
});

app.use(cors({origin: 'http://localhost:3000'}))
app.use(express.static(__dirname + '/'));

app.get('/ws', ( req, res) => {
  res.sendFile(__dirname + '/index.html');
});

server.listen(5400, () => {
  console.log('listening on:5400');
  
  io.on("join", ()=>{
    console.log("new connection established")
  });
  io.on('connection', function (socket) {
    socket.join("chat-room");
    socket.emit("joined", "name");
    socket.on("message", (data)=>{
      console.log("message received", data)
      socket.broadcast.to("chat-room").emit("message", data)
    })
  });

  

});

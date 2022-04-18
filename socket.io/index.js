import { Server } from 'socket.io';
import { handleConnect } from './handlers/socket.io.js';


const io = new Server(5400, {
  cors: {
    origin: "http://localhost:3000",
  }
});

io.on('connection', handleConnect);
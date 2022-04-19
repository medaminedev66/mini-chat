import { Server } from 'socket.io';
import { handleConnect } from './handlers/handleConnect.js';


const io = new Server(5400, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET"]
  }
});

io.on('connection', handleConnect);
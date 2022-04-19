const chatroom = "chat-room";
const usersArray = [];

export function handleConnect (socket) {
        
    const uid = Date.now();

    socket.join(chatroom);

    socket.on('user-joined', (name)=>{
        socket.emit("joined", {name, uid});
        socket.broadcast.to(chatroom).emit("joined", { name, uid });
    })

    socket.on("message", ({message}) => {
        socket.broadcast.to(chatroom).emit("message", { uid, message })
    });

    socket.on('disconnect', (uid)=> {
        console.log("user-exit", uid)
        socket.broadcast.to(chatroom).emit("exit", { uid })
    });

}

export const handleDisconnect = (uid, e)=>{console.log("disconnected", uid, e)};

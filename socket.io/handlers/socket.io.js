const chatroom = "chat-room"

export function handleConnect (socket) {
        
    // create a unique user id with timestamp
    const uid = Date.now();

    socket.join(chatroom);

    socket.on('user-joined', (data)=>{
        socket.emit("joined", {data, uid});
        socket.broadcast.to(chatroom).emit("joined", { data, uid });
    })

    socket.on("message", (data) => {
        console.log("message received", data)
        socket.broadcast.to(chatroom).emit("message", { uid, data })
    });

    socket.on('disconnect', (uid)=> {
        console.log("user-exit")
        socket.broadcast.to(chatroom).emit("exit", { uid })
    });

}

export const handleDisconnect = (uid, e)=>{console.log("disconnected", uid, e)};


/* eslint-disable no-undef */

export default function ChatForm() {

    const sendMessage = ()=>{
        socket.emit("message", {message: "message sample"})
      }
  return (
    <div><input type="text" />
        <button onClick={sendMessage} >Send</button></div>
  )
}

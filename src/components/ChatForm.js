/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
import { useState, useContext } from "react"
import ChatContext from "./ChatContext.js";

export default function ChatForm() {

  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState();
  const { connectState : [ isConnected ,setIsConnected] } = useContext(ChatContext);

  const sendMessage = ()=>{
    socket.emit("message", { message });
    setMessage("");
    setBtnDisabled(true);
  }

  const onChange = (e)=>{
    const value = e.target.value;
    value !==""? 
    (setBtnDisabled(false), setMessage(value))
    : setBtnDisabled(true)
  }

  const exit = ()=> {
    socket.disconnect();
    setIsConnected(false);
  }

  return (
    <div>
      <input type="text" placeholder="type your message here" onChange={onChange} value={message}/>
      <button onClick={sendMessage} disabled={btnDisabled} >Send</button>
      <button onClick={exit} >Exit</button>
    </div>
  )
}

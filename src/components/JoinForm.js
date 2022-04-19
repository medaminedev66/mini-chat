/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */

import { useContext, useState } from "react";
import ChatContext from "./ChatContext.js";


export default function JoinForm() {

  const { connectState: [,setIsConnected] } = useContext(ChatContext); //
  
  const [name, setName] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true)
  
  const connect = () => {
      window.socket = io('http://localhost:5400');
      
      socket.on("connect", ()=> {
        socket.emit('user-joined', name);
        setIsConnected(true);
      });

      socket.on("message", (data)=> {
        console.log(data);
      });
  }


  const onChange = (e)=> {
    const value = e.target.value
    value !== ""
    ? (setName(value), setBtnDisabled(false))
    : setBtnDisabled(true);
  }

  return (
    <div>
        <input placeholder="yupe your name..." onChange={ onChange } ></input>
        <button onClick={ connect } disabled={btnDisabled}  >Connect Now</button>
    </div>
  )
}

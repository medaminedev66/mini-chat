/* eslint-disable no-undef */

import { useContext, useState } from "react";
import ChatContext from "./ChatContext.js";


export default function JoinForm() {

  const { connectState } = useContext(ChatContext);

  const [isConnected, setIsConnected] = connectState;

  const [name, setName] = useState();
  // console.log(isConnected, setIsConnected);

  const connect = () => {
      window.socket = io('http://localhost:5400');
      
      //send user name after successful connection
      socket.on("connect", ()=> {
        socket.emit('user-joined', { name });
        // logic to hide JoinForm and show mainChat and ChatForm;
        setIsConnected(true);
      });

      // new user joined (including client)
      socket.on('joined', (e)=> {
        // some logic to show a new user joined the chat room
        console.log("joined chatroom", e);

      });

      socket.on("message", (data)=> {
        console.log(data);
      })
  }

  const onChange = (e)=> {
    setName(e.target.value);
    console.log(isConnected)
  }

  return (
    <div>
        <input placeholder="you name..." onChange={ onChange } ></input>
        <button onClick={ connect }  >Connect Now</button>
    </div>
  )
}

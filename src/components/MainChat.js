// import io from 'socket.io-client';
/* eslint-disable no-undef */

import ChatForm from "./ChatForm.js";
import LoginForm from "./LoginForm.js";
/* eslint-disable no-undef */


import "../index.css"


export default function MainChat() {

  return (
    <div>
      <LoginForm/>
      <div className="chat-box">
        <ul></ul>
      </div>
      <ChatForm />
    </div>
  );
}

import { useState, useEffect } from 'react';
import ChatForm from './components/ChatForm.js';
import JoinForm from './components/JoinForm.js';
import MainChat from './components/MainChat.js';
import ChatContext from "./components/ChatContext.js";

import './App.css';



function App() {

  const [isConnected, setIsConnected] = useState(false);
  const [members, setMembers] = useState([]);

  return (
    <div >
      <h1>Mini-Chat</h1>
        <ChatContext.Provider value={{connectState: [isConnected, setIsConnected], memberList:[members, setMembers]}}>
          {!isConnected? 
          <JoinForm /> :
          <><MainChat /><ChatForm /></>}
        </ChatContext.Provider>
    </div>
  );
}

export default App;

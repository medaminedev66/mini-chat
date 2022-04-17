// import io from 'socket.io-client';
/* eslint-disable no-undef */

export default function MainChat() {
  console.log(io());
  const socket = io.connect('http://localhost:4000');
  socket.emit('new connection');
  return (
    <>
      <div></div>
      <div>
        <input type="text" />
        <button>Send</button>
      </div>
    </>
  );
}

/* eslint-disable no-undef */


export default function LoginForm() {

    const connect = () => {
        window.socket = io('http://localhost:5400');
        socket.on("connect", ()=>{
          console.log("connected")
        });

        socket.on('joined', (e)=> console.log("joined successfully", e));

        socket.on("message", (data)=>{
          console.log(data)
        })
  }

  return (
    <div>
        <input placeholder="you name..." ></input>
        <button onClick={connect} >Connect Now</button>

    </div>
  )
}

/* eslint-disable no-undef */
import { useContext } from "react"
import ChatContext from "./ChatContext.js"

export default function MemberPool() {

  const {memberList : [members, setMembers]} = useContext(ChatContext);

  socket.on("joined", (data)=>{
    setMembers([...members, data])    
  })

  return (
    <>
      <span>In this room: </span>
      <span >{members.length? members.map(member=> (<span key={member.uid} > {member.name}, </span>)): ""}</span>
    </>
  )
}

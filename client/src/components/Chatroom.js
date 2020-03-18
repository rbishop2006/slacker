import React from "react"
import { useAuth } from "react-auth"
import MessageAside from "./MessageAside"
import MessageForm from "./MessageForm"
import Messages from "./Messages.js"
import "../styles/chatroom.scss"

export default props => {
  const { profile, signout } = useAuth()

  return (
    <div className="grid">
      <MessageAside signout={signout} />
      <div className="room">
        <Messages />
        <MessageForm username={profile.username} />
      </div>
    </div>
  )
}

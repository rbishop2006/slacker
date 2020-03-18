import React, { useEffect } from "react"
import { useChatroom } from "../hooks"
import { useAuth } from "react-auth"

import MessageForm from "./MessageForm"
import Messages from "./Messages.js"

export default props => {
  const { get } = useChatroom()
  const { profile, signout } = useAuth()

  useEffect(() => {
    get()
  }, [])

  return (
    <div>
      <Messages />
      <MessageForm />
      <h1>{profile.username}</h1>
      <button onClick={e => signout()}>Logout</button>
    </div>
  )
}

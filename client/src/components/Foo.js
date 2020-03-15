import React, { useEffect } from "react"
import { useFoo, useAuth } from "../hooks"

import MessageForm from "./MessageForm"
import Messages from "./Messages.js"

export default props => {
  const { get, foo } = useFoo()

  const { logout } = useAuth()

  useEffect(() => {
    get()
  })

  return (
    <div>
      <Messages />
      <MessageForm />
      <button onClick={e => logout()}>Logout</button>
    </div>
  )
}

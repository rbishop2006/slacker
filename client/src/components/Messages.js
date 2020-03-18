import React from "react"
import { useChat } from "../hooks"
import FontPicker from "font-picker-react"

export default props => {
  const { messages } = useChat()

  return (
    <div className="apply-font">
      {messages.map((msg, i) => (
        <p key={"message" + i}>
          {msg.name}: {msg.message}
        </p>
      ))}
    </div>
  )
}

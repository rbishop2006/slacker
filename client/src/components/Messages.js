import React from "react"
import { useChat } from "../hooks"

export default props => {
  const { messages } = useChat()

  return (
    <div className="messageArea">
      {messages.map((msg, i) => (
        <p key={"message" + i}>
          <strong>{msg.user}:</strong> {msg.msg}
          <span className="light">{msg.timestamp}</span>
        </p>
      ))}
    </div>
  )
}

// import FontPicker from "font-picker-react"

// export default props => {
//   const { messages } = useChat()

//   return (
//     <div className="apply-font">
//       {messages.map((msg, i) => (
//         <p key={"message" + i}>
//           {msg.name}: {msg.message}
//         </p>
//       ))}
//     </div>
//   )
// }

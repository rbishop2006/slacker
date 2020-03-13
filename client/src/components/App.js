import React from "react"

import MessageForm from "./MessageForm"
import Messages from "./Messages.js"

export default props => {
  return (
    <div>
      <MessageForm />
      <Messages />
    </div>
  )
}

//my original code

// import React, { useState } from "react"
// import io from "socket.io-client"

// export default props => {
//   const [text, setText] = useState("")
//   const [messages, setMessages] = useState([])

//   const socket = io.connect("http://10.255.255.12:3001")

//   socket.on("message", msg => {
//     setMessages([...messages, msg])
//   })

//   function handleClick(e) {
//     e.preventDefault()
//     socket.emit("message", text)
//     setText("")
//   }

//   return (
//     <div>
//       <div>
//         <input
//           type="text"
//           value={text}
//           onChange={e => setText(e.target.value)}
//         />
//         <button onClick={handleClick}>Send</button>
//       </div>
//       {messages.map((message, i) => (
//         <p key={"message" + i}>{message}</p>
//       ))}
//     </div>
//   )
// }

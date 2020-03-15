import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import AuthRoute from "../lib/AuthRoute"
import Login from "./Login"
import Chatroom from "./Chatroom"
import Register from "./Register"

export default props => {
  return (
    <Router>
      <div>
        <AuthRoute exact path="/" component={Chatroom} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </div>
    </Router>
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

import React, { Suspense } from "react"
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"
import "semantic-ui-css/semantic.min.css"
// import AuthRoute from "../lib/AuthRoute"
import { AuthProvider, AuthRoute } from "react-auth"
// import Login from "./Form"
// import Chatroom from "./Chatroom"
import Register from "./Form"

const Login = React.lazy(() => import("./Form"))
const Chatroom = React.lazy(() => import("./Chatroom"))

export default props => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <Route path="/login" component={Login} />
            <Route
              exact
              path="/"
              render={() => <Redirect to="/chat/general" />}
            />
            <AuthRoute path="/chat/:roomname" component={Chatroom} />
            <Route path="/register" component={Register} />
          </Suspense>
        </div>
      </Router>
    </AuthProvider>
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

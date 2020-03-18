import socket from "../../../socket.js"
import { addMessage } from "./actions"
import { dispatch } from "../../store"

socket.on("message", msg => dispatch(addMessage(msg)))

// import io from "socket.io-client"
// import store from "../../store"
// const dispatch = store.dispatch

// const socket = io.connect("http://10.255.255.12:3001")
// // const socket = io.connect("http://localhost:3001")
// export default socket

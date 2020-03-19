import socket from "../../../socket.js"
import { addMessage } from "./actions"

import store from "../../store.js"

export default () => {
  const dispatch = store.dispatch
  socket.on("message", msg => dispatch(addMessage(msg)))
}

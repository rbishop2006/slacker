import socket from "../../../socket.js"
import { useSelector } from "react-redux"

import init from "./socket"

init()

export function useChat() {
  const messages = useSelector(appState => appState.chatState.messages)
  const add = msg => socket.emit("message", msg)

  return { messages, add }
}

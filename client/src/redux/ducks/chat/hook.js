import socket from "../../../socket.js"
import { useSelector } from "react-redux"

export function useChat() {
  const messages = useSelector(appState => appState.chatState.messages)
  const add = msg => socket.emit("message", msg)

  return { messages, add }
}

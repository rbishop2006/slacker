import { ADD_MESSAGE } from "./definitions"

export function addMessage(msg) {
  return {
    type: ADD_MESSAGE,
    payload: msg
  }
}

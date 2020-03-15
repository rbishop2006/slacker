import { useSelector, useDispatch } from "react-redux"
import axios from "axios"

const GET_CHATROOM = "chatroom/GET_CHATROOM"

const initialState = {
  chatroom: ""
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CHATROOM:
      return { chatroom: action.payload }
    default:
      return state
  }
}

function getChatroom() {
  return dispatch => {
    axios
      .get("/api/chatroom")
      .then(resp => {
        dispatch({
          type: GET_CHATROOM,
          payload: resp.data.chatroom
        })
      })
      .catch()
  }
}

export function useChatroom() {
  const dispatch = useDispatch()
  const chatroom = useSelector(appState => appState.chatroomState.chatroom)
  const get = () => dispatch(getChatroom())

  return { chatroom, get }
}

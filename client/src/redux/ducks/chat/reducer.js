import { ADD_MESSAGE } from "./definitions"

const initialState = {
  messages: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return { messages: [...state.messages, action.payload] }
    default:
      return state
  }
}

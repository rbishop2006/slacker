import { useSelector, useDispatch } from "react-redux"
import axios from "axios"

const GET_FOO = "foo/GET_FOO"

const initialState = {
  foo: ""
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_FOO:
      return { foo: action.payload }
    default:
      return state
  }
}

function getFoo() {
  return dispatch => {
    axios.get("/api/foo").then(data => {
      dispatch({
        type: GET_FOO,
        payload: data.foo
      })
    })
  }
}

export function useFoo() {
  const dispatch = useDispatch()
  const foo = useSelector(appState => appState.fooState.foo)
  const get = () => dispatch(getFoo())

  return { foo, get }
}

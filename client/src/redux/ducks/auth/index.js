import { useSelector, useDispatch } from "react-redux"
import axios from "axios"

const LOGIN_SUCCESS = "auth/LOGIN_SUCCESS"
const LOGIN_FAILURE = "auth/LOGIN_FAILURE"
const LOGIN_PENDING = "auth/LOGIN_PENDING"
const LOGOUT = "auth/LOGOUT"

let interceptor = {}

const initialState = {
  isAthenticated: false,
  pending: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, isAthenticated: true, pending: false }
    case LOGIN_FAILURE:
      return { ...state, isAthenticated: false, pending: false }
    case LOGIN_PENDING:
      return { ...state, isAthenticated: false, pending: true }
    case LOGOUT:
      return { ...state, isAthenticated: false, pending: false }
    default:
      return state
  }
}

function authenticate(username, password) {
  return dispatch => {
    dispatch({
      type: LOGIN_PENDING
    })

    axios
      .post("/api/login", { username, password })
      .then(resp => {
        const token = resp.data.token
        interceptor = axios.interceptors.request.use(config => {
          config.headers = { Authentication: `Bearer ${token}` }
        })

        dispatch({
          type: LOGIN_SUCCESS
        })
      })
      .catch(err => {
        dispatch({
          type: LOGIN_FAILURE
        })
      })
  }
}

function deauthenticate() {
  axios.interceptors.request.eject(interceptor)
}

export function useAuth() {
  const dispatch = useDispatch()
  const isAthenticated = useSelector(
    appState => appState.authState.isAthenticated
  )
  const login = (username, password) =>
    dispatch(authenticate(username, password))
  const logout = () => dispatch(deauthenticate())

  return { login, logout, isAthenticated }
}

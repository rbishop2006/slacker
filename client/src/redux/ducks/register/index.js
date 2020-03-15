import { useSelector } from "react-redux"
import axios from "axios"

// const REGISTER_SUCCESS = "register/REGISTER_SUCCESS"
// const REGISTER_FAILURE = "register/REGISTER_FAILURE"

// const initialState = {
//   isRegistered: false
// }

// export default (state = initialState, action) => {
//   switch (action.type) {
//     case REGISTER_SUCCESS:
//       return { ...state, isRegistered: true }
//     case REGISTER_FAILURE:
//       return { ...state, isRegistered: false }

//     default:
//       return state
//   }
// }

function register(username, password) {
  return new Promise((resolve, reject) => {
    axios.post("/api/register", { username, password })
    // .then(() => {
    //   resolve({
    //     type: REGISTER_SUCCESS
    //   })
    //   reject({
    //     type: REGISTER_FAILURE
    //   })
    // })
  })
}

export function useRegister() {
  // const isRegistered = useSelector(appState => appState.regState.isRegistered)

  const reg = (username, password) => register(username, password)

  return { reg }
}

// let interceptor = {}
// const dispatch = useDispatch()

// function register(username, password) {
//   return dispatch => {
//     dispatch({
//       type: LOGIN_PENDING
//     })

//     axios
//       .post("/api/login", { username, password })
//       .then(resp => {
//         const token = resp.data.token
//         interceptor = axios.interceptors.request.use(config => {
//           config.headers = { Authentication: `Bearer ${token}` }
//         })

//         dispatch({
//           type: LOGIN_SUCCESS
//         })
//       })
//       .catch(err => {
//         dispatch({
//           type: LOGIN_FAILURE
//         })
//       })
//   }
// }

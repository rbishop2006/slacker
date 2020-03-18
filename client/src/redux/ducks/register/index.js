import axios from "axios"

function register(username, password) {
  return new Promise((resolve, reject) => {
    axios.post("/api/register", { username, password })
  })
}

export function useRegister() {
  const reg = (username, password) => register(username, password)

  return { reg }
}

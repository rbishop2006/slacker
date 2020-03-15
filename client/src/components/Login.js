import React, { useState } from "react"
import { useAuth } from "../hooks"
import { Link, Redirect, Route } from "react-router-dom"

export default props => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const { login, logout } = useAuth()

  function handleLogin(e) {
    e.preventDefault(e)

    login(username, password)
    // return (
    //   <Route>
    //     <Redirect to="/" />
    //   </Route>
    // )
  }

  return (
    <form onSubmit={handleLogin}>
      <input
        type="text"
        value={username}
        onChange={e => setUsername(e.target.value)}
        placeholder="username"
      />
      <br />
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="password"
      />
      <br />
      <button type="submit">Login</button>

      <Link to="/">Enter Chat</Link>
    </form>
  )
}

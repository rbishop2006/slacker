import React, { useState } from "react"
import { useAuth } from "../hooks"
import { Link } from "react-router-dom"

export default props => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const { login, logout } = useAuth()

  function handleLogin(e) {
    e.preventDefault()

    login(username, password)
  }

  return (
    <form onSubmit={handleLogin}>
      <input
        tupe="text"
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
      <button tupe="submit">Login</button>
      <Link to="/">Foo</Link>
      <button onClick={e => logout()}>Logout</button>
    </form>
  )
}

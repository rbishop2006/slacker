import React, { useState } from "react"
import { useRegister } from "../hooks"
import { Link } from "react-router-dom"
import validator from "validator"

export default props => {
  const [username, setUsername] = useState("")
  const [usernameError, setUsernameError] = useState("")
  const [password, setPassword] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [confirmPasswordError, setConfirmPasswordError] = useState("")

  const { reg } = useRegister()

  function handleRegister(e) {
    e.preventDefault(e)
    let valid = true

    if (!validator.isAlpha(username, "en-US")) {
      valid = false
      setUsernameError(`--Cannot be blank, must contain only letters`)
    } else {
      setUsernameError("")
    }
    if (
      !validator.isAlphanumeric(password, "en-US")
      // .isLength(password, { min: 8, max: undefined })
    ) {
      valid = false
      setPasswordError(`--Cannot be blank, must be at least 8 characters`)
    } else {
      setPasswordError("")
    }
    if (!validator.equals(confirmPassword, password)) {
      valid = false
      setConfirmPasswordError(`--Must match password`)
    } else {
      setConfirmPasswordError("")
    }

    if (valid) {
      reg(username, password).then(() => {
        props.history.push("/login")
      })
    }
  }

  return (
    <form onSubmit={handleRegister}>
      <label className={usernameError ? "error" : ""} htmlFor="username">
        Username{usernameError && usernameError}
      </label>
      <input
        type="text"
        value={username}
        id="username"
        className={usernameError ? "errorBox" : ""}
        onChange={e => setUsername(e.target.value)}
        placeholder="username"
      />
      <br />
      <label className={passwordError ? "error" : ""} htmlFor="password">
        Password{passwordError && passwordError}
      </label>
      <input
        type="password"
        id="password"
        className={passwordError ? "errorBox" : ""}
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="password"
      />
      <br />
      <label className={confirmPasswordError ? "error" : ""} htmlFor="confirm">
        Confirm{confirmPasswordError && confirmPasswordError}
      </label>
      <input
        type="password"
        id="confirm"
        className={confirmPasswordError ? "errorBox" : ""}
        value={confirmPassword}
        onChange={e => setConfirmPassword(e.target.value)}
        placeholder="password"
      />
      <br />
      <button type="submit">Register</button>
      <Link to="/login">Login</Link>
    </form>
  )
}

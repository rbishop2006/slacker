import React, { useState } from "react"
import { useAuth } from "react-auth"
import { Button, Form } from "semantic-ui-react"
import { api } from "react-auth"

export default props => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [cpassword, setCPassword] = useState("")
  const { signin } = useAuth()

  function handleLogin(e) {
    e.preventDefault(e)
    api.post("/register").then(data => {
      signin(username, password).then(() => {
        props.history.push("/chat/general")
      })
    })
  }

  return (
    <Form onSubmit={handleLogin}>
      <Form.Field>
        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="username"
        />
      </Form.Field>
      <Form.Field>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="password"
        />
      </Form.Field>
      <Form.Field>
        <input
          type="password"
          value={cpassword}
          onChange={e => setCPassword(e.target.value)}
          placeholder="confirm password"
        />
      </Form.Field>
      <Button type="submit">Register</Button>
    </Form>
  )
}

// import React, { useState } from "react"
// import { useRegister } from "../hooks"
// import { Link } from "react-router-dom"
// import validator from "validator"

// export default props => {
//   const [username, setUsername] = useState("")
//   const [usernameError, setUsernameError] = useState("")
//   const [password, setPassword] = useState("")
//   const [passwordError, setPasswordError] = useState("")
//   const [confirmPassword, setConfirmPassword] = useState("")
//   const [confirmPasswordError, setConfirmPasswordError] = useState("")

//   const { reg } = useRegister()

//   function handleRegister(e) {
//     e.preventDefault(e)
//     let valid = true

//     if (!validator.isAlpha(username, "en-US")) {
//       valid = false
//       setUsernameError(`--Cannot be blank, must contain only letters`)
//     } else {
//       setUsernameError("")
//     }
//     if (
//       !validator.isAlphanumeric(password, "en-US")
//       // .isLength(password, { min: 8, max: undefined })
//     ) {
//       valid = false
//       setPasswordError(`--Cannot be blank, must be at least 8 characters`)
//     } else {
//       setPasswordError("")
//     }
//     if (!validator.equals(confirmPassword, password)) {
//       valid = false
//       setConfirmPasswordError(`--Must match password`)
//     } else {
//       setConfirmPasswordError("")
//     }

//     if (valid) {
//       reg(username, password).then(() => {
//         props.history.push("/login")
//       })
//     }
//   }

//   return (
//     <form onSubmit={handleRegister}>
//       <label className={usernameError ? "error" : ""} htmlFor="username">
//         Username{usernameError && usernameError}
//       </label>
//       <input
//         type="text"
//         value={username}
//         id="username"
//         className={usernameError ? "errorBox" : ""}
//         onChange={e => setUsername(e.target.value)}
//         placeholder="username"
//       />
//       <br />
//       <label className={passwordError ? "error" : ""} htmlFor="password">
//         Password{passwordError && passwordError}
//       </label>
//       <input
//         type="password"
//         id="password"
//         className={passwordError ? "errorBox" : ""}
//         value={password}
//         onChange={e => setPassword(e.target.value)}
//         placeholder="password"
//       />
//       <br />
//       <label className={confirmPasswordError ? "error" : ""} htmlFor="confirm">
//         Confirm{confirmPasswordError && confirmPasswordError}
//       </label>
//       <input
//         type="password"
//         id="confirm"
//         className={confirmPasswordError ? "errorBox" : ""}
//         value={confirmPassword}
//         onChange={e => setConfirmPassword(e.target.value)}
//         placeholder="password"
//       />
//       <br />
//       <button type="submit">Register</button>
//       <Link to="/login">Login</Link>
//     </form>
//   )
// }

import React, { useState } from "react"
import { useAuth } from "react-auth"
import { Button, Form, Input } from "semantic-ui-react"
import { api } from "react-auth"

export default props => {
  const [username, setUsername] = useState("")
  const [usernameErr, setUsernameErr] = useState("")
  const [password, setPassword] = useState("")
  const [passwordErr, setPasswordErr] = useState("")
  const [cpassword, setCPassword] = useState("")
  const [cpasswordErr, setCPasswordErr] = useState("")
  const { signin } = useAuth()

  function handleLogin(e) {
    e.preventDefault(e)

    let err = false

    if (username.length < 4) {
      err = true
      setUsernameErr("Min Length is 4")
    } else if (username.length > 20) {
      err = true
      setUsernameErr("Max Length is 20")
    } else {
      setUsernameErr("")
    }

    if (password.length < 8) {
      err = true
      setPasswordErr("Min Length is 8")
    } else {
      setPasswordErr("")
    }
    if (password !== cpassword) {
      err = true
      setCPasswordErr("Passwords must match")
    } else {
      setCPasswordErr("")
    }
    if (!err) {
      api.post("/register", { username, password }).then(data => {
        signin(username, password).then(() => {
          props.history.push("/chat/general")
        })
      })
    }
  }

  return (
    <Form onSubmit={handleLogin}>
      <Form.Field
        control={Input}
        value={username}
        onChange={e => setUsername(e.target.value)}
        label="Username"
        placeholder="ex. John Smith"
        error={
          usernameErr
            ? {
                content: usernameErr,
                pointing: "below"
              }
            : false
        }
      ></Form.Field>
      <Form.Field
        control={Input}
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        label="Password"
        placeholder="must be at least 8 characters"
        error={
          passwordErr ? { content: passwordErr, pointing: "below" } : false
        }
      ></Form.Field>
      <Form.Field
        control={Input}
        type="password"
        value={cpassword}
        onChange={e => setCPassword(e.target.value)}
        label="confirm Password"
        placeholder="must be at least 8 characters"
        error={
          cpasswordErr ? { content: cpasswordErr, pointing: "below" } : false
        }
      ></Form.Field>
      <Button type="submit">Register</Button>
    </Form>
  )
}

import React, { useState } from "react"
import { useAuth } from "react-auth"
import { Button, Form, Input } from "semantic-ui-react"

export default props => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [err, setErr] = useState(false)
  const { signin } = useAuth()

  function handleLogin(e) {
    e.preventDefault(e)
    signin(username, password)
      .then(profile => {
        props.history.push("/chat/general")
      })
      .catch(e => {
        setErr(true)
      })
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
          err
            ? {
                content: "Invalid username or password",
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
        error={err}
      ></Form.Field>
      <Button type="submit">Login</Button>
    </Form>
  )
}

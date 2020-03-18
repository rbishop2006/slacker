import React, { useState } from "react"
import { useAuth } from "react-auth"
import { Button, Form } from "semantic-ui-react"

export default props => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const { signin } = useAuth()

  function handleLogin(e) {
    e.preventDefault(e)
    signin(username, password).then(profile => {
      props.history.push("/chat/general")
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
      <Button type="submit">Login</Button>
    </Form>
  )
}

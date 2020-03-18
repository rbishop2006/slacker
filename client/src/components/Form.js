import React from "react"
import Login from "./Login"
import Register from "./Register"
import { Tab } from "semantic-ui-react"
import "../styles/login.scss"

export default props => {
  const panes = [
    {
      menuItem: "Login",
      render: () => (
        <Tab.Pane attached={false}>
          <Login history={props.history} />
        </Tab.Pane>
      )
    },
    {
      menuItem: "Register",
      render: () => (
        <Tab.Pane attached={false}>
          <Register history={props.history} />
        </Tab.Pane>
      )
    }
  ]

  return (
    <div className="loginContainer">
      <h1>Slacker Chatroom</h1>
      <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
    </div>
  )
}

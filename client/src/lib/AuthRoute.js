import React from "react"
import { Route, Redirect } from "react-router-dom"
import { useAuth } from "../hooks"

export default props => {
  const { isAuthenticated } = useAuth()

  if (isAuthenticated) {
    return <Route {...props} />
  } else {
    return <Redirect to="/Login" />
  }
}

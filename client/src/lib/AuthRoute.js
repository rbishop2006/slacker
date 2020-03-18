import React from "react"
import { Route, Redirect } from "react-router-dom"
import { useAuth } from "../hooks"

export default ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useAuth()

  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  )
}

//my original code

// export default props => {
//   const { isAuthenticated } = useAuth()
//   if (isAuthenticated) {
//     return <Route {...props} />
//   } else {
//     return <Redirect to="/login" />
//   }
// }
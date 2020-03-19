import React, { Suspense } from "react"
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"
import "semantic-ui-css/semantic.min.css"
import { AuthProvider, AuthRoute } from "react-auth"
import Register from "./Form"

const Login = React.lazy(() => import("./Form"))
const Chatroom = React.lazy(() => import("./Chatroom"))

export default props => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <Route path="/login" component={Login} />
            <Route
              exact
              path="/"
              render={() => <Redirect to="/chat/general" />}
            />
            <AuthRoute path="/chat/:roomname" component={Chatroom} />
            <Route path="/register" component={Register} />
          </Suspense>
        </div>
      </Router>
    </AuthProvider>
  )
}

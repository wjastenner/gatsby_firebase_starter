import React from "react"
import { Router, Redirect } from "@reach/router"
import Dashboard from "../components/app/dashboard"
import Create from "../components/app/createpost"
import NotFound from "../components/app/notfound"
import Login from "../components/app/login"
import PrivateRoute from "../components/PrivateRoute"

const App = () => {
  return (
    <Router>
      <Login path="/app/login" component={Login} />
      <Redirect from="/app/" to="/app/dashboard" noThrow={true} />
      <PrivateRoute path="/app/dashboard" component={Dashboard} />
      <PrivateRoute path="/app/create" component={Create} />
      <NotFound default />
    </Router>
  )
}

export default App

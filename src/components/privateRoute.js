import React, { useContext } from "react"
import { navigate } from "gatsby"
import { PageContext } from "../context/PageContext"

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const { user } = useContext(PageContext)

  if (user.status === "loggedOut") {
    if (location.pathname.includes("/app/")) {
      navigate("/")
    } else {
      navigate("/app/login")
    }

    return null
  }
  if (user.status === "loggedIn") {
    return <Component {...rest} />
  }
  return null
}
export default PrivateRoute

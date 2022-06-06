import React from "react"
import { navigate } from "gatsby"
import { AuthServices } from "../services/auth.services"

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  if (!AuthServices.isLoggedIn() && (location.pathname!=="/")) {
    navigate("/")
    return null
  }

  return <Component {...rest} />
}

export default PrivateRoute
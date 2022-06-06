import * as React from "react"
import PropTypes from "prop-types"
import "./layout.css"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import Header from "./header"
import Footer from "./footer"
import { AuthServices } from "../../services/auth.services"

const Layout = ({ children }) => {
  return (
    <>
      {AuthServices.isLoggedIn() !== "" ? (
        <>
          <div className="headerContainer">
            <Header />
          </div>
          <main>{children}</main>
          <div className="footer-container">
            <Footer />
          </div>
        </>
      ):(<><main>{children}</main></>)}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

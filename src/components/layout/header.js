import * as React from "react"
import { Link, navigate } from "@reach/router"
import "./layout.css"
import { AuthServices } from "../../services/auth.services"

const Header = () => {
  const [isNavCollapsed, setIsNavCollapsed] = React.useState(true)
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed)
  const handleLogoClick=()=>{
    setIsNavCollapsed(true)
    navigate("/app/dashboard")
  }

  const handleLogout=()=>{
    AuthServices.logout()
    setIsNavCollapsed(false)
    navigate("/")
  }
  return (
    <>
      <div className="wrapper">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div>
            <button className="navbar-brand m-0" onClick={handleLogoClick}>
              LOGO
            </button>
          </div>
          <div className="align-items-center">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-label="Toggle navigation"
              onClick={handleNavCollapse}
              aria-expanded={!isNavCollapsed ? true : false}
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className={`${
                isNavCollapsed ? "collapse" : ""
              } navbar-collapse navbar-menu`}
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link onClick={handleNavCollapse} to="/app/about" className="nav-link-text">
                    LineuP
                  </Link>
                </li>
                <li className="nav-item">
                  <Link onClick={handleNavCollapse} to="/**" className="nav-link-text">
                    Experience
                  </Link>
                </li>
                <li className="nav-item active">
                  {" "}
                  <Link onClick={handleNavCollapse} to="/**" className="nav-link-text">
                    Plan Your Journey
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link onClick={handleNavCollapse} to="/**" className="buy-ticket">
                    Buy Tickets
                  </Link>
                </li>
                <li className="nav-item active">
                  <span onClick={handleLogout} className="nav-link-text">
                    Log out
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Header

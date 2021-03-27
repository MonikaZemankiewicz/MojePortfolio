import React from "react"
import { FaAlignLeft } from "react-icons/fa"
import PageLinks from "../constants/links"
const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <button
            type="button"
            className="toggle-btn"
            aria-label="toggle"
            onClick={toggleSidebar}
          >
            <FaAlignLeft></FaAlignLeft>
          </button>
        </div>
        <PageLinks styleClass="nav-links"></PageLinks>
      </div>
    </nav>
  )
}

export default Navbar

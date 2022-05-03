import React from "react";
import { NavLink } from "react-router-dom";
import "../css/NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          😉weeink
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
          <li className="nav-item">
              <NavLink className="nav-link" to="/home">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://pages.tibush.com/shrtcode/frequently-asked-questions-faq" target="_blank" rel="noopener noreferrer">
                FAQ
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://shrtco.de/tos" target="_blank" rel="noopener noreferrer">
                TOS
              </a>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/note">
                Note!
              </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://shrtco.de/disallowed" target="_blank" rel="noopener noreferrer">
                Not Allowed
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

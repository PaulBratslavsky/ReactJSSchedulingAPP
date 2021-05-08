import React from "react";
import useToggle from "../../hooks/useToggle";
import NavDropDown from "../NavDropDown/NavDropDown";

export default function Navigation() {
  const [toglling, attrs] = useToggle();

  function addClass(toggle) {
    return toggle ? "show" : "";
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
          {...attrs}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse justify-content-end ${addClass(toglling)}`}
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav ">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
            <NavDropDown />
          </ul>
        </div>
      </div>
    </nav>
  );
}

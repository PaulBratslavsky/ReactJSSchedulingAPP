import React from "react";
import useHover from "./../../hooks/useHover";

export default function NavDropDown() {
  const [hovering, attrs] = useHover();

  function addClass(hovering) {
    return hovering ? "show" : "";
  }

  return (
    <li className="nav-item dropdown" {...attrs}>
      <a
        className="nav-link dropdown-toggle"
        href="#"
        id="navbarDropdownMenuLink"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Dropdown link
      </a>
      <ul className={`dropdown-menu ${addClass(hovering)}`} aria-labelledby="navbarDropdownMenuLink">
        <li>
          <a className="dropdown-item" href="#">
            Action
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Another action
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Something else here
          </a>
        </li>
      </ul>
    </li>
  );
}

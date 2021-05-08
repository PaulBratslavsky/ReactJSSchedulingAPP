import React from "react";
import useToggle from "../../hooks/useToggle";
import "./navigation.scss";

export default function Navigation() {
  const [toglling, attrs] = useToggle();

  function addClass(toggle) {
    return toggle ? "show" : "";
  }

  return (
    <nav className='navbar pb_navigation navbar-expand-lg navbar-light sticky-top bg-white'>
      <div className='container'>
        <a className='navbar-brand' href='#'>
          Navbar
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNavDropdown'
          aria-controls='navbarNavDropdown'
          aria-expanded='false'
          aria-label='Toggle navigation'
          {...attrs}
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div
          className={`collapse navbar-collapse justify-content-between ${addClass(
            toglling
          )}`}
          id='navbarNavDropdown'
        >
          <ul className='navbar-nav align-items-center'>
            <li className='nav-item'>
              <a className='nav-link active' aria-current='page' href='#'>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Features
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Pricing
              </a>
            </li>
            <li className='nav-item mx-2'>
              <input
                class='btn btn-warning btn-sm'
                type='button'
                value='Created Event'
              />
            </li>
          </ul>
          <ul className='navbar-nav align-items-center'>
            <li className='nav-item me-2'>
              <input
                class='btn btn-secondary btn-sm'
                type='button'
                value='Signup'
              />
            </li>
            <li className='nav-item'>
              <input class='btn btn-info btn-sm' type='button' value='Login' />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

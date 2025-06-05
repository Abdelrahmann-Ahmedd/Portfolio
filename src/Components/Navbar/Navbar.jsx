import React from 'react';
import { Link } from 'react-router';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-dark ms-auto navbar-expand-lg rounded-3"
      style={{
        width: '60%',
        backgroundColor: 'rgba(105, 105, 105, 0.21)',
        zIndex: 999999,
      }}
    >
      <div className="container-fluid position-relative">
        <button
          className="navbar-toggler toggle-btn"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav w-100 m-auto d-flex justify-content-evenly flex-wrap">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/resume">
                Resume
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/portfolio">
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

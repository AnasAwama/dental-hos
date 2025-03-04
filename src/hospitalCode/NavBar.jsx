import React, {useState, useEffect} from 'react';
import "../style/NavBar.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
export const NavBar = () => {

  const [navbarScrolled, setNavbar] = useState(false);

  const navbarScrolling = () => { 
    if(window.scrollY >= 56){
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', navbarScrolling);
    return () => {
      window.removeEventListener('scroll', navbarScrolling);
    }
  }, []);

    return (
      <>
        <nav className={`navbar navbar-expand-lg navbar-light  fixed-top custom-navbar ${navbarScrolled ? "navbarScrolled" : ""}`}>
          <div class="container d-flex justify-content-center align-items-center ps-5">
            <Link class="navbar-brand ms-5" to="/">
              Navbar
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="collapse navbar-collapse justify-content-center	"
              id="navbarNavDropdown"
            >
              <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                  <Link className="nav-link active" to="/">
                    Home
                  </Link>
                </li>
                <li class="nav-item me-3">
                  <a class="nav-link" href="#">
                    About
                  </a>
                </li>
                <li class="nav-item nav-item me-3">
                  <a class="nav-link" href="#">
                    Services
                  </a>
                </li>
                <li class="nav-item nav-item me-3">
                  <a class="nav-link" href="#">
                    Blog
                  </a>
                </li>
                <li class="nav-item nav-item me-3">
                  <a class="nav-link" href="#">
                    Dentist
                  </a>
                </li>
                <li class="nav-item nav-item me-3">
                  <Link class="nav-link" to="/portfolio">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <button type="button" class="btn custom-btn btn-sm mt-2">
                    Small button
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
}
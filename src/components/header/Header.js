import React from "react";
import "./header.scss";
function Header({ menuOpen, setMenuOpen }) {
  return (
    <nav className={"navbar " + (menuOpen && "active")}>
      <div className="navbar__container">
        <p className="navbar__container-brand">MATHNUMBER</p>
        <nav className="navbar__container-nav">
          <div className="navbar__container-nav-item">
            <a href="#banner" className="navbar__container-nav-link">
              <span>Home</span>
            </a>
          </div>
          <div className="navbar__container-nav-item">
            <a href="#introduction" className="navbar__container-nav-link">
              <span>About</span>
            </a>
          </div>
          <div className="navbar__container-nav-item">
            <a href="#skill" className="navbar__container-nav-link">
              <span>Skills</span>
            </a>
          </div>
          <div className="navbar__container-nav-item">
            <a href="#project" className="navbar__container-nav-link">
              <span>Projects</span>
            </a>
          </div>
          <div className="navbar__container-nav-item">
            <a href="#contact" className="navbar__container-nav-link">
              <span>Contact</span>
            </a>
          </div>
        </nav>
        <div className="navbar__container-right">
          <div
            className="navbar__container-hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;

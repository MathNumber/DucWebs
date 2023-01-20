import React from 'react'
import "./header.scss";
function Header() {
  return (
    <nav className="navbar">
    <div className="navbar-container">
      <p className="navbar-container__brand">MATHNUMBER</p>     
         <nav className="navbar-container-nav">
          <div className="navbar-container-nav__item"><a href='#banner' className="navbar-container-nav__link"><span>Home</span></a></div>
          <div className="navbar-container-nav__item"><a href='#introduction' className="navbar-container-nav__link"><span>About</span></a></div>
          <div className="navbar-container-nav__item"><a href='#skill'  className="navbar-container-nav__link"><span>Skills</span></a></div>
          <div className="navbar-container-nav__item"><a href='#project'  className="navbar-container-nav__link"><span>Projects</span></a></div>
          <div className="navbar-container-nav__item"><a href='#contact'  className="navbar-container-nav__link"><span>Contact</span></a></div>
        </nav> 
      </div>
  </nav>
  )
}

export default Header
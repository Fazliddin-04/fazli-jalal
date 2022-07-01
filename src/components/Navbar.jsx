import React from 'react'
import logo from '../assets/img/JF_Logo-removebg-preview.png'

function Navbar() {
  return (
    <div className="navbar container">
      <div className="navbar-list">
        <a href="#home" className="navbar-list__link">
          <span>{'//01. '}</span> {' <Home/>'}
        </a>
        <a href="#portfolio" className="navbar-list__link">
          <span>{'//02. '}</span> {' <Portfolio/>'}
        </a>
      </div>
      <div className='logoDiv'>
        <img src={logo} alt="logo" width={165} />
      </div>
      <div className="navbar-list">
        <a href="#press" className="navbar-list__link">
          <span>{'//03. '}</span> {' <Press/>'}
        </a>
        <a href="#contact" className="navbar-list__link">
          <span>{'//04. '}</span> {' <Contact/>'}
        </a>
      </div>
    </div>
  )
}

export default Navbar

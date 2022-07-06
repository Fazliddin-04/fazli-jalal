import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'
import logo from '../assets/img/JF_Logo-removebg-preview.png'
gsap.registerPlugin(TextPlugin)

function Navbar() {
  const navbarLink1 = useRef()
  const navbarLink2 = useRef()
  const navbarLink3 = useRef()
  const navbarLink4 = useRef()

  useEffect(() => {
    gsap.to(navbarLink1.current, {
      duration: 1.6,
      text: '//01. < Home />',
      ease: 'none',
      delay: 0.6,
    })
    gsap.to(navbarLink2.current, {
      duration: 1.6,
      text: `//02. < Portfolio />`,
      ease: 'none',
      delay: 0.6,
    })
    gsap.to(navbarLink3.current, {
      duration: 1.6,
      text: '//03. < Press />',
      ease: 'none',
      delay: 0.6,
    })
    gsap.to(navbarLink4.current, {
      duration: 1.6,
      text: '//04. < Contact />',
      ease: 'none',
      delay: 0.6,
    })
  }, [navbarLink1, navbarLink2, navbarLink3, navbarLink4])

  return (
    <div className="navbar container">
      <div className="navbar-list">
        <a href="#home" className="navbar-list__link">
          <span ref={navbarLink1}></span>
        </a>
        <a href="#portfolio" className="navbar-list__link">
          <span ref={navbarLink2}></span>
        </a>
      </div>
      <div className="logoDiv">
        <img src={logo} alt="" />
      </div>
      <div className="navbar-list">
        <a href="#press" className="navbar-list__link">
          <span ref={navbarLink3}></span>
        </a>
        <a href="#contact" className="navbar-list__link">
          <span ref={navbarLink4}></span>
        </a>
      </div>
    </div>
  )
}

export default Navbar

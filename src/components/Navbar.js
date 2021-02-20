import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from './Button'
import './Navbar.css'

const Navbar = () => {
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)

  const handleClick = () =>  setClick(!click)
  const closeMobileMenu = () =>  setClick(false)

  const showButton = () => {
    if(window.innerWidth<=960) {
      setButton(false);
    } else {
      setButton(true);
    }
  }

  useEffect(()=> {
    showButton()
  }, [])

  window.addEventListener('resize', showButton)

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <NavLink to="/" className="navbar-logo">
            CJINTU <i class="fab fa-500px"></i>
          </NavLink>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <NavLink to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/services" className="nav-links" onClick={closeMobileMenu}>
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/product" className="nav-links" onClick={closeMobileMenu}>
                Product
              </NavLink>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">Sign Up</Button>}
        </div>
      </nav>
    </>
  )
}

export default Navbar;
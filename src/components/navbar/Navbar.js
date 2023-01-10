import React from 'react'
import Logo from '../../assets/images/logo.svg'

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar-logo'>
            <img src={Logo} alt="logo" />
        </div>
        <div className='navbar-menu-list'>
            <p className='navbar-menu'>About Us</p>
            <p className='navbar-menu'>Contact Us</p>
        </div>
    </div>
  )
}

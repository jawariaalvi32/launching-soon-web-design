import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/logo.svg'

export const Navbar = ({ pageName, setPageName }) => {
  return (
    <div className='navbar'>
        <div className='navbar-logo'>
            <img src={Logo} alt="logo" />
        </div>
        <div className='navbar-menu-list'>
            <p className='navbar-menu' onClick={ () => setPageName('about') }>About Us</p>
            <p className='navbar-menu' onClick={ () => setPageName('contact') }>Contact Us</p>
        </div>
    </div>
  )
}

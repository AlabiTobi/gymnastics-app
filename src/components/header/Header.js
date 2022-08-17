import React from 'react'
import './Header.css'
import Semicolon from '../../assets/semicolon.svg'
const Header = () => {
  return (
    <div className='header'>
        <img className='logo' src={Semicolon} alt="" />
        <ul className='header-menu'>
            <li>Home</li>
            <li>Programs</li>
            <li>Why us</li>
            <li>Plans</li>
            <li>Testimonials</li>
        </ul>

    </div>
  )
}

export default Header
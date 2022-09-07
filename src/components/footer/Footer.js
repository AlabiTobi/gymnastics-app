import React from 'react'
import './Footer.css'
import Github from '../../assets/github.png'
import Instagram from '../../assets/instagram.png'
import LinkedIn from '../../assets/linkedin.png'
import semicolon from '../../assets/semicolon.svg'

const Footer = () => {
  return (
    <div className="Footer-container">
        <hr />
        <div className='footer'>  
            <div className="social-links">
                <img src={Github} alt="" />
                <img src={Instagram} alt="" />
                <img src={LinkedIn} alt="" />
            </div>
            <div className="logo-footer">
                <img src={semicolon} alt="" />
            </div>
        </div>
        <div className='blur blur-footer-1'>
          
        </div>
        <div className='blur blur-footer-2'>
          
        </div>
    </div>
  )
}

export default Footer
import React from 'react'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import './header.css'
import ME from '../../assets/me2.png'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
       <h1>Dan Payne</h1>
       <h3 className="text-light">iOS Engineer & Fullstack Developer</h3>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me"/>
        </div>



        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
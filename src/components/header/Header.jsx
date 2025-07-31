import React from 'react'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import './header.css'
import ME from '../../assets/me6.png'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
       <h1>Dan Payne</h1>
       <h3 className="text-light">Systems Admin & iOS Engineer</h3>
        <CTA />
        <HeaderSocials />




        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
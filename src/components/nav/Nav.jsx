import React from 'react'
import {useState} from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineBook} from 'react-icons/ai'
import {RiServiceLine} from 'react-icons/ri'
import {AiOutlineMessage} from 'react-icons/ai'

import './nav.css'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  const handleNav = (hash) => {
    setActiveNav(hash)
    if (isHome) return // normal anchor behavior on home page
    // Navigate to home page then scroll to section
    navigate('/' + hash)
  }

  return (
    <nav>
      <a href={isHome ? '/' : '/'} onClick={() => handleNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href={isHome ? '#about' : '/#about'} onClick={() => handleNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href={isHome ? '#services' : '/#services'} onClick={() => handleNav('#services')} className={activeNav === '#services' ? 'active' : ''}><AiOutlineBook /></a>
      <a href={isHome ? '#portfolio' : '/#portfolio'} onClick={() => handleNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><RiServiceLine /></a>
      <a href={isHome ? '#contact' : '/#contact'} onClick={() => handleNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiOutlineMessage /></a>
    </nav>
  )
}

export default Nav

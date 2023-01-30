import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'

import './nav.css'

const Nav = () => {
  return (
    <nav>
      <a href="#"><AiOutlineHome /></a>
      <a href="#about"><AiOutlineUser /></a>
      <a href="#experience"><AiOutlineHome /></a>
      <a href="#portfolio"><AiOutlineHome /></a>
      <a href="#contact"><AiOutlineHome /></a>
    </nav>
  )
}

export default Nav
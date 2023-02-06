import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaTwitterSquare} from 'react-icons/fa'




const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/danpayne5532/" target="_blank"> <BsLinkedin/></a>
      <a href="https://github.com/dpayne5532" target="_blank"><FaGithub /></a>
      <a href="https://twitter.com/DanPayne80" target="_blank"><FaTwitterSquare /></a>

    </div>
  )
}

export default HeaderSocials
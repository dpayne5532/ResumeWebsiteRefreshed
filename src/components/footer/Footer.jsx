import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Dan Payne</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">What I Do</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/danpayne5532/" target="_blank"> <BsLinkedin/></a>
      <a href="https://github.com/dpayne5532" target="_blank"><FaGithub /></a>
      <a href="https://dribbble.com/DanPayne80" target="_blank"><FiDribbble /></a>
      </div>


    </footer>
  )
}

export default Footer
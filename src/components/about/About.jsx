import React from 'react'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import './about.css'
import ME from '../../assets/me-about.png'

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image"/>
          </div>

        </div>
        <div className="about__content">
          <div className="about__cards">

            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>20+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>So many clients</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>Just enough room for your project</small>
            </article>
          </div>

          <p>I’ve been independently studying iOS programming over
            the past 2 years, and recently attended a full stack
            web development boot camp. I’ve not only learned the
            technical coding side, but also Agile methodologies of
            software development. I’m eager to learn more and
            fully intend to enter the software developer field as a
            junior developer. Along with that, I have an extensive
            professional background over various industries that
            have each somehow utilized my passion for technology.

          </p>
          <a href="#contact" className="btn btn-primary">Let's Chat</a>



        </div>
      </div>
    </section>
  )
}

export default About

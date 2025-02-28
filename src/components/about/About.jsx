import React from 'react'
import {FaAward} from 'react-icons/fa'
import {RiMacbookLine} from 'react-icons/ri'
import {VscFolderLibrary} from 'react-icons/vsc'
import './about.css'
import ME from '../../assets/me-about2.png'

const About = () => {
  return (
    <section id="about">
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
              <small>20+ years in professional enviornments 30+ years working with technology</small>
            </article>

            <article className="about__card">
              <RiMacbookLine className='about__icon' />
              <h5>Versatility</h5>
              <small>Experience with dozens of platforms</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>Everything from 2D adventure games to new construction closing software</small>
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
          <a href="#contact" className="btn btn-primary">Send me a Message</a>



        </div>
      </div>
    </section>
  )
}

export default About

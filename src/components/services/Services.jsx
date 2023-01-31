import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h2>What I Do</h2>


      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>iOS Apps</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Utility Apps</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Networking Apps</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>2D Games</p>
            </li>

          </ul>
        </article>
        {/* END OF iOS Apps*/}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>React Frontend</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>NodeJS/Express Backend</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>MongoDB</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Live Deployment</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Site Maintenance</p>
            </li>
          </ul>
        </article>
        {/* WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>5+ years experience in Adobe Photoshop</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>3+ years experience in Adobe Premiere</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Licensed UAV Pilot</p>
            </li>

          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services
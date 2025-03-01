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
            <h3>Swift Platforms</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>iOS</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>iPadOS</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>tvOS</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>watchOS</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>macOS</p>
            </li>

          </ul>
        </article>
        {/* END OF iOS Apps*/}
        <article className="service">
          <div className="service__head">
            <h3>System Admin</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Azure</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Entra ID</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Office 365</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Intune MDM/MAM</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Microsoft Certified</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Apple Business Manager</p>
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
              <p>10+ years experience in Adobe Photoshop</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>6+ years experience in Adobe Premiere</p>
            </li>
           
            <li>
              <BiCheck className='service__list-icon' />
              <p>Video Production</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Video Drone Pilot</p>
            </li>

          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services
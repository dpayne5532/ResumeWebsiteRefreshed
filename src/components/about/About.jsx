import React from 'react'
import {FaAward} from 'react-icons/fa'
import {RiMacbookLine} from 'react-icons/ri'
import {VscFolderLibrary} from 'react-icons/vsc'
import './about.css'
import ME from '../../assets/me-about2.png'
import AZURE_BADGE from '../../assets/900badge.png'
import AZURE_BADGEB from '../../assets/104badge.png'
import AZURE_BADGEC from '../../assets/305badge.png'

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
          <div className="about__card">
          <h5>MS Certified</h5><p></p>
            <img src={AZURE_BADGE} alt="Azure 900 Badge" />
            
          </div>
            <article className="about__card">
              
              <h5>In Progress</h5><p></p>
              <img src={AZURE_BADGEB} alt="Azure 104 Badge" />
              </article>

            <article className="about__card">
              
              <h5>In Progress</h5><p></p>
              <img src={AZURE_BADGEC} alt="Azure 305 Badge" />
              
            </article>

         
          </div>

          <p>I am a currently a Lead Systems Administrator with 
            extensive experience managing and optimizing Microsoft 
            Azure and Microsoft 365 environments. With a strong 
            foundation in cloud infrastructure, identity management, 
            automation, and security, I specialize in designing and 
            maintaining scalable, secure, and efficient cloud solutions. 
            I currently hold the Microsoft Certified: Azure Fundamentals (AZ-900) 
            certification and am actively pursuing Azure Administrator Associate (
              AZ-104) and Azure Solutions Architect Expert (AZ-305) to deepen 
              my expertise in cloud administration and architecture. My skill 
              set includes Azure Virtual Machines, Active Directory, Intune, 
              networking, automation with PowerShell, and security best 
              practices, ensuring reliable and high performing IT environments. 
              I thrive on problem solving, optimizing cloud operations, and 
              implementing best in class solutions that align with business goals.

          </p>
          <a href="#contact" className="btn btn-primary">Send me a Message</a>



        </div>
      </div>
    </section>
  )
}

export default About

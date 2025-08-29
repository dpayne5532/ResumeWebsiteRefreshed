import React from 'react';
import './about.css';
import ME from '../../assets/me-about2.png';
import AZURE_BADGE from '../../assets/900badge.png';
import AZURE_BADGEB from '../../assets/104badge.png';
import AZURE_BADGEC from '../../assets/305badge.png';

const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about__content">

          <h5 className="cert__label">Click to view certification</h5>
          <div className="about__cards">
            <div className="about__card">
              <a
                href="https://learn.microsoft.com/api/credentials/share/en-us/DanPayne-2235/7508E4DDC453E79F?sharingId=976D08B58945AFFF"
                target="_blank"
                rel="noreferrer"
              >
                <img src={AZURE_BADGE} alt="AZ-900 Badge" />
              </a>
            </div>

            <div className="about__card">
              <a
                href="https://learn.microsoft.com/api/credentials/share/en-us/DanPayne-2235/577798C2139F1274?sharingId=976D08B58945AFFF"
                target="_blank"
                rel="noreferrer"
              >
                <img src={AZURE_BADGEB} alt="AZ-104 Badge" />
              </a>
            </div>

            <div className="about__card">
              <a
                href="https://learn.microsoft.com/api/credentials/share/en-us/DanPayne-2235/B8BCF0101869195D?sharingId=976D08B58945AFFF"
                target="_blank"
                rel="noreferrer"
              >
                <img src={AZURE_BADGEC} alt="AZ-305 Badge" />
              </a>
            </div>
          </div>

          <p>
            I am currently a Lead Systems Administrator with extensive experience managing and optimizing Microsoft Azure and Microsoft 365 environments. With a strong foundation in cloud infrastructure, identity management, automation, and security, I specialize in designing and maintaining scalable, secure, and efficient cloud solutions.
            <br /><br />
            I hold the Microsoft Certified: Azure Administrator Associate (AZ-104) and Microsoft Certified: Azure Solutions Architect Expert (AZ-305) certifications, demonstrating advanced expertise in both cloud administration and architecture. These certifications, combined with hands-on experience, position me as a Microsoft Certified Expert capable of delivering enterprise-grade solutions that align technology with business goals.
            <br /><br />
            I thrive on problem solving, optimizing cloud operations, and implementing best-in-class solutions that drive efficiency, security, and innovation.
          </p>

          <a href="#contact" className="btn btn-primary">Send me a Message</a>
        </div>
      </div>
    </section>
  );
};

export default About;

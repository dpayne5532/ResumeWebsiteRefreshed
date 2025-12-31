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
            I am a Lead Systems Administrator with a strong Site Reliability Engineering mindset, focused on building and operating reliable, scalable, and secure Azure platforms. My work centers on designing cloud infrastructure that is observable, automated, and resilient by default, while enabling engineering teams to deploy and iterate safely.
            <br /><br />
            I hold three Microsoft Azure certifications: AZ-900 (Azure Fundamentals), AZ-104 (Azure Administrator Associate), and AZ-305 (Azure Solutions Architect Expert). I have hands-on experience designing Azure architectures, implementing CI/CD pipelines from the ground up, automating infrastructure using Infrastructure as Code, and leading incident response and operational improvements in production environments.
            <br /><br />
            With a Bachelor of Science in Aviation Education, I bring a safety-first, reliability-driven mindset to cloud engineering. I am passionate about reducing operational toil, improving system visibility, and aligning reliability engineering with real business outcomes.
          </p>

          <a href="#contact" className="btn btn-primary">Send me a Message</a>
        </div>
      </div>
    </section>
  );
};

export default About;

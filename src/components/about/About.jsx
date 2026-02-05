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
            I build automation that makes people's jobs easier, and I've got the receipts.
            <br /><br />
            As Lead Systems Administrator, I transformed a largely manual Azure environment into an automated, observable platform. I cut new-hire provisioning from 30+ minutes to under 60 seconds, closed security gaps in employee offboarding, and built a full-stack Salesforce-to-Azure data platform that turned slow API queries into sub-second searches.
            <br /><br />
            I automate with Node.js, PowerShell, and Azure CLI. I deploy with GitHub Actions and Azure DevOps. I secure with Entra ID, Conditional Access, and Zero Trust. And I document everything, because reliable systems start with clear thinking.
          </p>

          <a href="#contact" className="btn btn-primary">Send me a Message</a>
        </div>
      </div>
    </section>
  );
};

export default About;

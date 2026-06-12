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
          </p>
          <p>
            After almost four years at Catalyst Solutions, where I led DevOps from the ground up, I've moved on to a Lead DevSecOps role in the defense industry. Some highlights from my Catalyst work:
          </p>
          <ul className="about__highlights">
            <li>Cut new-hire provisioning from 30+ minutes of manual steps to under 60 seconds by building an Azure Functions pipeline that creates Entra ID accounts, assigns M365 licenses, sets managers, and opens IT tickets, all from a single HR form submission.</li>
            <li>Closed a security gap where terminated employees kept access for hours post-offboarding. Built a termination webhook that disables accounts in seconds, with deny-list protection for critical service accounts and automatic audit trails.</li>
            <li>Eliminated daily manual SFTP directory checks by building a timer-triggered monitoring system that polls six directories across three clients every five minutes and sends automatic email alerts when files land.</li>
            <li>Built a full-stack Salesforce-to-Azure data platform (React, Express.js, Azure SQL) that let non-sales staff search CRM contacts and addresses without needing a Salesforce license. Incremental sync every five minutes keeps data current, and the company reclaimed expensive full licenses from users who only needed read-only lookups.</li>
            <li>Designed a proof-of-concept local LLM processing platform using Ollama and RAG that keeps sensitive data entirely on-premises with zero cloud exposure, HIPAA-compatible architecture.</li>
          </ul>
          <p>
            I automate with Node.js, PowerShell, and Azure CLI. I deploy with GitHub Actions and Azure DevOps. I secure with Entra ID, Conditional Access, and Zero Trust. And I document everything, because reliable systems start with clear thinking.
          </p>

          <a href="#contact" className="btn btn-primary">Send me a Message</a>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from 'react';
import './services.css';
import { BiCheck } from 'react-icons/bi';

const Services = () => {
  return (
    <section id="services">
      <h2>What I Do</h2>

      <div className="container services__container">
        {/* iOS Development */}
        <article className="service">
          <div className="service__head">
            <h3>iOS Ecosystem</h3>
          </div>
          <ul className="service__list">
            <ServiceItem text="iOS, iPadOS, macOS, watchOS, tvOS" />
            <ServiceItem text="SwiftUI / UIKit Development" />
            <ServiceItem text="Xcode & Xcode Cloud" />
            <ServiceItem text="App Store Deployment (TestFlight, App Analytics)" />
            <ServiceItem text="Core Data / SpriteKit / Apple Services" />
          </ul>
        </article>

        {/* System Administration */}
        <article className="service">
          <div className="service__head">
            <h3>System Administration</h3>
          </div>
          <ul className="service__list">
            <ServiceItem text="Azure Infrastructure Management" />
            <ServiceItem text="Entra ID / Active Directory" />
            <ServiceItem text="Microsoft 365 & Exchange Online" />
            <ServiceItem text="Endpoint Management with Intune MDM/MAM" />
            <ServiceItem text="Apple Business Manager Integration" />
            <ServiceItem text="Group Policy & Configuration Profiles" />
            <ServiceItem text="Patch Management & Compliance Policies" />
            <ServiceItem text="Remote Device Support & Troubleshooting" />
            <ServiceItem text="Microsoft Certified" />
          </ul>
        </article>

        {/* DevOps & Automation */}
        <article className="service">
          <div className="service__head">
            <h3>DevOps & Automation</h3>
          </div>
          <ul className="service__list">
            <ServiceItem text="CI/CD with GitHub Actions & Azure DevOps" />
            <ServiceItem text="Scripting with PowerShell & Bash" />
            <ServiceItem text="Monitoring with Azure Monitor & Sentinel" />
            <ServiceItem text="Security Hardening & Role-Based Access Control" />
          </ul>
        </article>
      </div>
    </section>
  );
};

const ServiceItem = ({ text }) => (
  <li>
    <BiCheck className="service__list-icon" />
    <p>{text}</p>
  </li>
);

export default Services;

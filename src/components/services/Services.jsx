import React from 'react';
import './services.css';
import { BiCheck } from 'react-icons/bi';

const Services = () => {
  return (
    <section id="services">
      <h2>What I Do</h2>

      <div className="container services__container">

        {/* Site Reliability Engineering */}
        <article className="service">
          <div className="service__head">
            <h3>Site Reliability Engineering</h3>
          </div>
          <ul className="service__list">
            <ServiceItem text="Design and operate reliable, scalable Azure platforms" />
            <ServiceItem text="Lead incident response, mitigation, and postmortems" />
            <ServiceItem text="Define and monitor system health and reliability metrics" />
            <ServiceItem text="Eliminate operational toil through automation" />
            <ServiceItem text="Balance performance, scalability, and cost-aware engineering" />
          </ul>
        </article>

        {/* Cloud Infrastructure & Platform Engineering */}
        <article className="service">
          <div className="service__head">
            <h3>Cloud Infrastructure & Platform Engineering</h3>
          </div>
          <ul className="service__list">
            <ServiceItem text="Azure infrastructure design and operations" />
            <ServiceItem text="Entra ID (AAD), identity, and access management" />
            <ServiceItem text="Microsoft 365 and Exchange Online administration" />
            <ServiceItem text="Endpoint management with Intune MDM/MAM" />
            <ServiceItem text="Security, governance, and compliance by design" />
            <ServiceItem text="Patch management and configuration standardization" />
          </ul>
        </article>

        {/* CI/CD, Automation & Observability */}
        <article className="service">
          <div className="service__head">
            <h3>CI/CD, Automation & Observability</h3>
          </div>
          <ul className="service__list">
            <ServiceItem text="CI/CD pipelines with Azure DevOps and GitHub Actions" />
            <ServiceItem text="Infrastructure as Code and configuration automation" />
            <ServiceItem text="PowerShell and Bash scripting" />
            <ServiceItem text="Monitoring and alerting with Azure Monitor and Sentinel" />
            <ServiceItem text="Security hardening and role-based access control" />
          </ul>
        </article>

        {/* Spacer left */}
        <article className="service service--spacer" />

        {/* Software Engineering (Centered Supporting Skillset) */}
        <article className="service">
          <div className="service__head">
            <h3>Software Engineering</h3>
          </div>
          <ul className="service__list">
            <ServiceItem text="JavaScript and Python for automation and integrations" />
            <ServiceItem text="REST APIs, scripting, and system integrations" />
            <ServiceItem text="iOS, iPadOS, macOS, watchOS, and tvOS development" />
            <ServiceItem text="SwiftUI and UIKit application development" />
            <ServiceItem text="CI/CD with Xcode Cloud and automated workflows" />
            <ServiceItem text="Application lifecycle awareness and production support" />
          </ul>
        </article>

        {/* Spacer right */}
        <article className="service service--spacer" />

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

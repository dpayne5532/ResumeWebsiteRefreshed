import React from 'react';
import './experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';

const Experience = () => {
  return (
    <section id="experience">
      <h2>My Experience</h2>

      <div className="container experience__container">

        {/* Site Reliability Engineering */}
        <div className="experience__frontend">
          <h3>Site Reliability Engineering</h3>
          <div className="experience__content">
            <Skill title="Highly Available Azure Architecture" />
            <Skill title="Incident Response & Root Cause Analysis" />
            <Skill title="Operational Metrics & Reliability Targets" />
            <Skill title="Eliminating Manual Toil through Automation" />
            <Skill title="Performance & Capacity Planning" />
            <Skill title="Cost-Aware Infrastructure Design" />
          </div>
        </div>

        {/* Azure Cloud Infrastructure */}
        <div className="experience__backend">
          <h3>Azure Cloud Infrastructure</h3>
          <div className="experience__content">
            <Skill title="Azure Virtual Machines & App Services" />
            <Skill title="Azure Networking (VNETs, DNS, Routing)" />
            <Skill title="Azure Entra ID (AAD) & Identity Management" />
            <Skill title="Azure Storage & Azure SQL" />
            <Skill title="Azure Resource Manager & Bicep" />
            <Skill title="Secure & Fault-Tolerant Design" />
          </div>
        </div>

        {/* CI/CD & Automation */}
        <div className="experience__frontend">
          <h3>CI/CD & Automation</h3>
          <div className="experience__content">
            <Skill title="Azure DevOps Pipelines (Built from Scratch)" />
            <Skill title="GitHub Actions" />
            <Skill title="Terraform (Infrastructure as Code)" />
            <Skill title="PowerShell Automation" />
            <Skill title="Bash / Shell Scripting" />
            <Skill title="System Integration & Deployment Automation" />
          </div>
        </div>

        {/* Observability & Incident Response */}
        <div className="experience__backend">
          <h3>Observability & Incident Response</h3>
          <div className="experience__content">
            <Skill title="Azure Monitor & Log Analytics" />
            <Skill title="Alerting & Reliability Dashboards" />
            <Skill title="Microsoft Sentinel (SIEM)" />
            <Skill title="Endpoint Detection & Response (EDR)" />
            <Skill title="Operational Troubleshooting & Escalation" />
            <Skill title="Postmortems & Continuous Improvement" />
          </div>
        </div>

        {/* Security & Governance */}
        <div className="experience__frontend">
          <h3>Security & Governance</h3>
          <div className="experience__content">
            <Skill title="RBAC & Least Privilege Access" />
            <Skill title="Conditional Access & Zero Trust" />
            <Skill title="Azure Security Center" />
            <Skill title="Key Vault & Secrets Management" />
            <Skill title="Security Baselines & Hardening" />
            <Skill title="Compliance & Audit Readiness" />
          </div>
        </div>

        {/* iOS Engineering (Supporting Skillset) */}
        <div className="experience__backend">
          <h3>Software Engineering (iOS)</h3>
          <div className="experience__content">
            <Skill title="SwiftUI & UIKit" />
            <Skill title="Xcode & Xcode Cloud" />
            <Skill title="CI/CD for Mobile Applications" />
            <Skill title="App Store & TestFlight Deployment" />
            <Skill title="Application Lifecycle & Observability" />
          </div>
        </div>

      </div>
    </section>
  );
};

const Skill = ({ title }) => (
  <article className="experience__details">
    <BsPatchCheckFill className="experience__details-icon" />
    <div>
      <h4>{title}</h4>
    </div>
  </article>
);

export default Experience;

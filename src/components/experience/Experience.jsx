import React from 'react';
import './experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';

const Experience = () => {
  return (
    <section id="experience">
      <h2>My Experience</h2>

      <div className="container experience__container">

        {/* Azure */}
        <div className="experience__frontend">
          <h3>Azure Infrastructure & Administration</h3>
          <div className="experience__content">
            <Skill title="Azure Virtual Machines" />
            <Skill title="Azure Resource Manager" />
            <Skill title="Azure Networking" />
            <Skill title="Azure Entra ID / Active Directory" />
            <Skill title="Azure Storage Solution" />
            <Skill title="Azure Security" />
            <Skill title="Azure Monitor & Log Analytics" />
            <Skill title="Microsoft 365 & Cloud Services" />
          </div>
        </div>

        {/* Intune */}
        <div className="experience__backend">
          <h3>Microsoft Intune Administration</h3>
          <div className="experience__content">
            <Skill title="Mobile Device Management" />
            <Skill title="Mobile Application Management" />
            <Skill title="Compliance & Conditional Access" />
            <Skill title="Windows Autopilot & Zero Touch Deployment" />
            <Skill title="Configuration Profiles & Policy Enforcement" />
            <Skill title="Patch Management & Update Policies" />
            <Skill title="Remote Management & Endpoint Security" />
            <Skill title="Reporting & Monitoring" />
          </div>
        </div>

        {/* DevOps */}
        <div className="experience__frontend">
          <h3>DevOps & Automation</h3>
          <div className="experience__content">
            <Skill title="Azure DevOps Pipelines" />
            <Skill title="GitHub Actions" />
            <Skill title="Terraform (Infrastructure as Code)" />
            <Skill title="PowerShell Scripting" />
            <Skill title="Bash / Shell Scripting" />
            <Skill title="CI/CD Implementation" />
            <Skill title="Docker & Containerization" />
          </div>
        </div>

        {/* Monitoring & Security */}
        <div className="experience__backend">
          <h3>Monitoring & Security</h3>
          <div className="experience__content">
            <Skill title="Azure Security Center" />
            <Skill title="Microsoft Sentinel (SIEM)" />
            <Skill title="Endpoint Detection & Response (EDR)" />
            <Skill title="Log Analytics Workspace" />
            <Skill title="RBAC (Role-Based Access Control)" />
            <Skill title="Security Baselines & Hardening" />
          </div>
        </div>

        {/* iOS Development */}
        <div className="experience__frontend">
          <h3>iOS Development</h3>
          <div className="experience__content">
            <Skill title="SwiftUI" />
            <Skill title="UIKit" />
            <Skill title="Xcode" />
            <Skill title="Sprite Kit" />
            <Skill title="Core Data" />
            <Skill title="Xcode Cloud" />
          </div>
        </div>

        {/* iOS Deployment */}
        <div className="experience__frontend">
          <h3>iOS Deployment</h3>
          <div className="experience__content">
            <Skill title="App Store Connect" />
            <Skill title="Apple TestFlight" />
            <Skill title="Apple Transporter" />
            <Skill title="App Analytics" />
            <Skill title="Sales and Trends" />
            <Skill title="Payments" />
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

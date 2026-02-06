import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'
import imgHrDashboard from '../../assets/si-hr-dashboard.png'
import imgOnboarding from '../../assets/si-onboarding.png'
import imgEmployeeSync from '../../assets/si-employee-sync.png'
import imgSalesforce from '../../assets/si-salesforce.png'
import imgSftpMonitor from '../../assets/si-sftp-monitor.png'
import imgTermination from '../../assets/si-termination.png'
import imgOffshoreDb from '../../assets/si-offshore-db.png'
import imgTeamsBot from '../../assets/si-teams-bot.png'
import './systems-integrations.css'

const projects = [
  {
    name: 'HR Dashboard',
    image: imgHrDashboard,
    description:
      'Single-page web app for HR teams to process onboarding and termination workflows. Built as an Azure Static Web App with Entra ID authentication, providing a centralized interface for employee lifecycle management.',
    impact: [],
    tech: ['HTML/CSS/JS', 'Azure Static Web Apps', 'Azure Functions', 'Entra ID'],
  },
  {
    name: 'Onboarding Automation',
    image: imgOnboarding,
    description:
      'Webhook service that automates new hire provisioning: creates Entra ID accounts, assigns M365 licenses, sets managers, and opens IT tickets, all from a single form submission.',
    impact: ['Provisioning cut from 30+ minutes to under 60 seconds'],
    tech: ['Node.js', 'Azure Functions', 'Microsoft Graph API', 'SolarWinds API'],
  },
  {
    name: 'Termination Automation',
    image: imgTermination,
    description:
      'Automates offboarding by disabling accounts in seconds, with deny-list protection for critical service accounts and automatic audit trails.',
    impact: ['Closed security gap where terminated employees kept access for hours'],
    tech: ['Node.js', 'Azure Functions', 'Microsoft Graph API', 'SolarWinds API'],
  },
  {
    name: 'Employee Data Sync',
    image: imgEmployeeSync,
    description:
      'Real-time sync of employee changes from Paylocity to Entra ID. Automatically propagates job title, department, and manager changes with full audit logging.',
    impact: [],
    tech: ['Node.js', 'Azure Functions', 'Paylocity API', 'Microsoft Graph API', 'Application Insights'],
  },
  {
    name: 'Salesforce Data Platform',
    image: imgSalesforce,
    description:
      'Full-stack platform syncing Salesforce CRM data to Azure SQL with a searchable React frontend. Incremental sync runs every 5 minutes keeping data fresh.',
    impact: ['Turned slow API queries into sub-second searches'],
    tech: ['React', 'Express.js', 'Azure Functions', 'Azure SQL', 'Salesforce API', 'Entra ID'],
  },
  {
    name: 'SFTP File Monitor',
    image: imgSftpMonitor,
    description:
      'Polls 6 directories across 3 clients every 5 minutes, sends automatic email alerts when files land.',
    impact: ['Eliminated daily manual SFTP directory checks'],
    tech: ['Node.js', 'Azure Functions', 'SSH2/SFTP', 'Azure Blob Storage', 'Microsoft Graph API'],
  },
  {
    name: 'Offshore Employee Database',
    image: imgOffshoreDb,
    description:
      'Full-stack web app for tracking offshore employees with CRUD operations, skills tracking, project allocations, and departmental assignments.',
    impact: [],
    tech: ['React', 'Vite', 'Express.js', 'Azure Static Web Apps', 'Azure App Service', 'Azure SQL', 'Entra ID'],
  },
  {
    name: 'Teams Service Desk Agent',
    image: imgTeamsBot,
    description:
      'AI-powered IT Service Desk assistant for Microsoft Teams. Uses Claude for natural language understanding and SolarWinds Service Desk for ticket management. Deployed to Azure App Service with CI/CD via GitHub Actions.',
    impact: ['Create, update, and track IT tickets without leaving Teams'],
    tech: ['Node.js', 'Claude API', 'Azure Bot Service', 'SolarWinds API', 'Adaptive Cards', 'GitHub Actions'],
  },
]

const SystemsIntegrations = () => {
  const [expandedImage, setExpandedImage] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setExpandedImage(null)
    }
    if (expandedImage) {
      document.addEventListener('keydown', handleEsc)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = ''
    }
  }, [expandedImage])

  return (
    <section className="si-page">
      <div className="container si-page__container">
        <Link to="/" className="si-page__back">
          <BsArrowLeft /> Back to Home
        </Link>

        <h2>Systems Integrations</h2>
        <p className="si-page__intro">
          A suite of Azure-hosted services that automate employee lifecycle management, sync data across HR and CRM platforms, and eliminate manual IT processes.
        </p>

        <div className="si-page__grid">
          {projects.map((project) => (
            <article key={project.name} className="si-card">
              <div className="si-card__image" onClick={() => setExpandedImage(project)}>
                <img src={project.image} alt={project.name} />
              </div>
              <h3 className="si-card__title">{project.name}</h3>
              <p className="si-card__desc">{project.description}</p>

              {project.impact.length > 0 && (
                <ul className="si-card__impact">
                  {project.impact.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}

              <div className="si-card__tech">
                {project.tech.map((t) => (
                  <span key={t} className="si-card__tag">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>

      {expandedImage && (
        <div className="si-lightbox" onClick={() => setExpandedImage(null)}>
          <div className="si-lightbox__content" onClick={(e) => e.stopPropagation()}>
            <img src={expandedImage.image} alt={expandedImage.name} />
            <p className="si-lightbox__caption">{expandedImage.name}</p>
            <button className="si-lightbox__close" onClick={() => setExpandedImage(null)}>&times;</button>
          </div>
        </div>
      )}
    </section>
  )
}

export default SystemsIntegrations

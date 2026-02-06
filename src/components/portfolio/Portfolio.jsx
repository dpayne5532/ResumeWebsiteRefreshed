import React from 'react'
import { Link } from 'react-router-dom'
import IMG1 from '../../assets/portfolio1.png'
import IMG3 from '../../assets/portfolioscc.png'
import IMG4 from '../../assets/portfolioWeb.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG7 from '../../assets/portfolio8.png'
import IMGLLM from '../../assets/portfolioLLM.png'
import IMGTeamsBot from '../../assets/portfolioTeamsBot.png'
import './portfolio.css'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMGLLM} alt="" />
          </div>
          <h3>Local LLM Platform - Node.js | Azure | Ollama</h3>
          <p className="portfolio__item-desc">On-premises LLM processing platform using Ollama and RAG, keeps sensitive data entirely local with zero cloud exposure.</p>
          <div className="portfolio__item-cta">
          <a href="https://www.youtube.com/watch?v=9h-7YfVkZEk" className='btn btn-primary' target="_blank" rel="noreferrer">Watch Demo</a>
          <a href="https://catalystsolutions-my.sharepoint.com/:p:/p/dan_payne/IQBnEG7bUUvbSIXf5lFRNmoZAT69lVaOC3yoS9UoAqfxh6E?rtime=y25WMtFk3kg" className='btn btn-primary' target="_blank" rel="noreferrer">PowerPoint Deck</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>Systems Integrations - Azure | Entra | HRIS | CRM</h3>
          <p className="portfolio__item-desc">Automated pipelines connecting Azure, Entra ID, HRIS, and CRM systems, eliminating manual data entry and syncing across platforms.</p>
          <div className="portfolio__item-cta">
          <a href="https://github.com/dpayne5532/systems-integrations" className='btn' target="_blank" rel="noreferrer">GitHub</a>
          <Link to="/systems-integrations" className='btn btn-primary'>View Details</Link>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>This Website - ReactJS</h3>
          <p className="portfolio__item-desc">This portfolio site, built with React and self-hosted on a Raspberry Pi 5 with a Cloudflare reverse proxy.</p>
          <div className="portfolio__item-cta">
          <a href="https://github.com/dpayne5532/ResumeWebsiteRefreshed" className='btn' target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMGTeamsBot} alt="" />
          </div>
          <h3>Teams Service Desk Agent - Claude | Node.js | Azure</h3>
          <p className="portfolio__item-desc">AI-powered IT Service Desk assistant for Microsoft Teams. Uses Claude for natural language understanding and SolarWinds for ticket management.</p>
          <div className="portfolio__item-cta">
          <a href="https://github.com/dpayne5532/teams-service-desk-agent" className='btn' target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Escrow App - iPadOS</h3>
          <p className="portfolio__item-desc">Native iPad app for managing real estate escrow transactions with document tracking and status workflows.</p>
          <div className="portfolio__item-cta">
          <a href="https://github.com/dpayne5532/EscrowApp" className='btn' target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://youtu.be/x8RoHYyOsIk" className='btn btn-primary' target="_blank" rel="noreferrer">Watch a Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Ship Cap'n Crew - iOS</h3>
          <p className="portfolio__item-desc">A dice game for iPhone based on the classic Ship, Captain, and Crew bar game, built from scratch to the App Store.</p>
          <div className="portfolio__item-cta">
          <a href="https://github.com/dpayne5532/ShipCapnCrew" className='btn' target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://apps.apple.com/us/app/ship-capn-crew/id1670235470" className='btn btn-primary' target="_blank" rel="noreferrer">Apple App Store</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG7} alt="" />
          </div>
          <h3>Five DiceTV - tvOS</h3>
          <p className="portfolio__item-desc">A simple five-dice roller for Apple TV, built from scratch to the App Store so players can use it for any dice game.</p>
          <div className="portfolio__item-cta">
          <a href="https://testflight.apple.com/join/sCQzhlHC" className='btn btn-primary' target="_blank" rel="noreferrer">Apple TestFlight</a>
          <a href="https://apps.apple.com/us/app/five-dice-tv/id1672794861" className='btn btn-primary' target="_blank" rel="noreferrer">Apple App Store</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
import React from 'react'
import IMG1 from '../../assets/portfolio1.png'
import MP from '../../assets/milliePlane.png'
import IMG3 from '../../assets/portfolioscc.png'
import IMG4 from '../../assets/portfolioWeb.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio7.png'
import IMG7 from '../../assets/portfolio8.png'
import AppIcon1 from '../../assets/milliePlaneIcon.png'
import './portfolio.css'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
            </div>

          <h3>Escrow App - iPadOS</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/dpayne5532/EscrowApp" className='btn' target="_blank">GitHub</a>
          <a href="https://youtu.be/x8RoHYyOsIk" className='btn btn-primary' target="_blank">Watch a Demo</a>

          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
            </div>
          <h3>Ship Cap'n Crew - iOS</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/dpayne5532/ShipCapnCrew" className='btn' target="_blank">GitHub</a>
          <a href="https://apps.apple.com/us/app/ship-capn-crew/id1670235470" className='btn btn-primary' target="_blank">Apple App Store</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG7} alt="" />
          </div>
          <h3>Five DiceTV - tvOS</h3>
          <div className="portfolio__item-cta">
          <a href="https://testflight.apple.com/join/sCQzhlHC" className='btn btn-primary' target="_blank">Apple TestFlight</a>
          <a href="https://apps.apple.com/us/app/five-dice-tv/id1672794861" className='btn btn-primary' target="_blank">Apple App Store</a>
          </div>
        </article>





        <article className="portfolio__item">
          <div className="portfolio__item-image"><img src={IMG6} alt="" /></div>

          <h3>Card Workout - iOS</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/dpayne5532/CardWorkout" className='btn' target="_blank">GitHub</a>
          <a href="https://testflight.apple.com/join/BPvQpSk9" className='btn btn-primary' target="_blank">Apple TestFlight</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>PB Scorekeeper - watchOS</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/dpayne5532/PBWatchApp" className='btn' target="_blank">GitHub</a>
          <a href="https://testflight.apple.com/join/zRfRWLCI" className='btn btn-primary' target="_blank">Apple TestFlight</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
          <img src={MP} alt="" />
          </div>
          <h3>Millie Plane - iPadOS</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/dpayne5532/MilliePlane" className='btn' target="_blank">GitHub</a>
          <a href="https://testflight.apple.com/join/6iP84rAD" className='btn btn-primary' target="_blank">Apple TestFlight</a>
          </div>
        </article>

        <article className="portfolio__item2">
         {/* SPACE HOLDER ARTICLE */}
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>This Website - ReactJS</h3>
          <div className="portfolio__item-cta"></div>
          <a href="https://github.com/dpayne5532/ResumeWebsiteRefreshed" className='btn' target="_blank">GitHub</a>
        </article>

        <article className="portfolio__item2">
          {/* SPACE HOLDER */}
        </article>

      </div>
    </section>
  )
}

export default Portfolio
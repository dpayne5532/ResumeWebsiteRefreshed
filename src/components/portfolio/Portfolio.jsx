import React from 'react'
import IMG1 from '../../assets/portfolio1.png'
import MP from '../../assets/milliePlane.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio7.png'
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
          <a href="https://github.com/dpayne5532/EscrowApp" className='btn'>Github</a>
          <a href="https://youtu.be/cqBv5AoRzj8" className='btn btn-primary' target="_blank">Watch a Demo</a>
          </div>
        </article>



        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>PB Scorekeeper - WatchOS</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/dpayne5532/PBWatchApp" className='btn'>Github</a>
          <a href="https://testflight.apple.com/join/zRfRWLCI" className='btn btn-primary' target="_blank">Apple TestFlight</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image"><img src={IMG6} alt="" /></div>

          <h3>Card Workout - iOS</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/dpayne5532/CardWorkout" className='btn'>Github</a>
          <a href="https://testflight.apple.com/join/BPvQpSk9" className='btn btn-primary' target="_blank">Apple TestFlight</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
          <img src={MP} alt="" />
          </div>
          <h3>Millie Plane - iPadOS</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/dpayne5532/MilliePlane" className='btn' target="_blank">Github</a>
          <a href="https://testflight.apple.com/join/6iP84rAD" className='btn btn-primary' target="_blank">Apple TestFlight</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Aerial Drone Footage</h3>
          <div className="portfolio__item-cta"></div>
          <a href="https://youtu.be/czxMf96rju8" className='btn btn-primary' target="_blank">Watch on YouTube</a>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
            </div>
          <h3>Hobos in Moab</h3>
          <div className="portfolio__item-cta">
          <a href="https://youtu.be/nkdSQmNA2zY" className='btn btn-primary' target="_blank">Watch on YouTube</a>
          </div>
        </article>







      </div>
    </section>
  )
}

export default Portfolio
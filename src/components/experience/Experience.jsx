import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
const Experience = () => {
  return (
    <section id="experience">
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">

            <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>SwiftUI</h4>
            </div>
            </article>

            <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>UIKit</h4>
            </div>

            </article>

            <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>HTML</h4>
            </div>

            </article>

            <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>CSS</h4>
            </div>
            </article>

            <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>JavaScript</h4>
            </div>
            </article>


            <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>React JS</h4>
            </div>
            </article>
          </div>

        </div>
        <div className="experience__backend">
        <h3>Backend Development</h3>
        <div className="experience__content">

            <article className="experience__details">
             <BsPatchCheckFill className="experience__details-icon" />
             <div>
                <h4>Node JS</h4>
              </div>
            </article>

            <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Express JS</h4>
              </div>
            </article>

            <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>MongoDB</h4>
              </div>
            </article>

            <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>MySQL</h4>
              </div>
            </article>


</div>
        </div>
      </div>
    </section>
  )
}

export default Experience
import React from 'react'
import CV from '../../assets/DanPayneResume.png'

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">Download Resume</a>
      <a href="#contact" className="btn btn-primary">Let's Chat</a>
    </div>
  )
}

export default CTA
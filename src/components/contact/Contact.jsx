import React, {useRef} from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'

import {FaGithub} from 'react-icons/fa'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_q5oemjq', 'template_fte1ldm', form.current, 'osmJSjfgEud4JssXg')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      alert('Your Message Has Been Sent!')
  };
  return (
    <section id="contact">
    <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>Dan@danpayne.co</h5>
            <a href="mailto:dan@danpayne.co" target="_blank">Send an email!</a>

          </article>

          <article className="contact__option">
            <FaGithub className="contact__option-icon"/>
            <h4>GitHub</h4>
            <h5>dpayne5532</h5>
            <a href="https://github.com/dpayne5532" target="_blank">Follow me on GitHub</a>

          </article>


        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" id="" rows="7" placeholder="Your Message" required />
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact


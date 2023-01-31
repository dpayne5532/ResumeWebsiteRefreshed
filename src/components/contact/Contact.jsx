import React, {useRef} from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsTwitter} from 'react-icons/bs'
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
  };
  return (
    <section id="contact">
    <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>dpaynebills@gmail.com</h5>
            <a href="mailto:dpaynebills@gmail.com" target="_blank">Send an email!</a>

          </article>

          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon"/>
            <h4>Facebook Messenger</h4>
            <h5>Dan Payne</h5>
            <a href="https://m.me/profile.php?id=100012329175749" target="_blank">Message e on Facebook</a>

          </article>

          <article className="contact__option">
            <BsTwitter className="contact__option-icon"/>
            <h4>Twitter</h4>
            <h5>@DanPayne80</h5>
            <a href="https://twitter.com/DanPayne80" target="_blank">DM me on Twitter</a>

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


import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsTwitter} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id="contact">
    <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5>dpaynebills@gmail.com</h5>
            <a href="mailto:dpaynebills@gmail.com" target="_blank">Send an email!</a>

          </article>

          <article className="contact__option">
            <RiMessengerLine />
            <h4>Facebook Messenger</h4>
            <h5>Dan Payne</h5>
            <a href="https://m.me/profile.php?id=100012329175749" target="_blank">Message e on Facebook</a>

          </article>

          <article className="contact__option">
            <BsTwitter />
            <h4>Twitter</h4>
            <h5>@DanPayne80</h5>
            <a href="https://twitter.com/DanPayne80" target="_blank">DM me on Twitter</a>

          </article>

        </div>
        <form action=""></form>
      </div>
    </section>
  )
}

export default Contact


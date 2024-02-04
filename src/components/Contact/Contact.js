import './Contact.css';
import { LuMail } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';


function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kpevcwg', 'template_vx5bm3n', form.current, 'sEdH-34AFQGCg8kAE')
     e.target.reset()
  };


  return (
    <section id='contact'>
      <h5>Contact with Us</h5>
      <h2 className='contacthead'>Contact Me</h2>  
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <LuMail className='contact-icon'/>
            <h4>Email</h4>
            <h5>nikhilmahajan929@gmail.com</h5>
            <a href='mailto:nikhilmahajan929@gmail.com' target='_blank'>Send a Massage</a>
          </article>
          <article className='contact__option'>
            <FaLinkedin className='contact-icon'/>
            <h4>linkedin</h4>
            <h5>Nikhil Mahajan</h5>
            <a href='https://www.linkedin.com/in/nikhil-mahajan-085' target='_blank'>Send a Massage</a>
          </article>
          <article className='contact__option'>
            <FaWhatsapp className='contact-icon'/>
            <h4>WhatsApp</h4>
            <h5>+123456</h5>
            <a href='https://api.whatsapp.com/send/phone+=9131430033' target='_blank'>Send a Massage</a>
          </article>
        </div>
    
    <form ref={form} onSubmit={sendEmail}>
        <input type='text' name='name' placeholder='Full Name' required/>
        <input type='email' name='email' placeholder='Your Email' required/>
        <textarea name='message' rows='5' cols='30' placeholder='Message' required ></textarea>
        <button type='submit' className='contact-btn'>Submit</button>
    </form>

        </div>    
    </section>
  )
}

export default Contact
import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  
  return (
    <section id='contact'>
      <h5>Ponte en Contacto</h5>
      <h2>Contáctame</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>gabrielparenas27@gmail.com</h5>
            <a href="mailto:gabrielparenas27@gmail.com" target='__blank'>Enviar Mensaje</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Gabriel-Piñero</h5>
            <a href="https://m.me/gabrieleduardo.pineroarenas" target='__blank'>Enviar Mensaje</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>WathsApp</h4>
            <h5>(+58)412-782-3455</h5>
            <a href="https://api.whatsapp.com/send?phone=584127823455" target='__blank'>Enviar Mensaje</a>
          </article>
        </div>

        <form action="https://formsubmit.co/2b312a785b840e5d90d624ab5be1f1dc" method="POST">
          <input type="text" name="name" placeholder='Nombre Completo' requerid />
          <input type="email" name="email" placeholder='Correo Electrónico' requerid />
          <input type="text" name="subject" placeholder='Subject' requerid />
          <textarea name="comments" rows="7" placeholder='Mensaje' requerid ></textarea>
          <input type='submit' className='btn btn-primary' value='Enviar Mensaje'></input>
          <input type="hidden" name="_captcha" value="false"></input>
          <input type="hidden" name="_next" value="https://portfolio-web-python.netlify.app"></input>
        </form>
      </div>
    </section>
  )
}

export default Contact
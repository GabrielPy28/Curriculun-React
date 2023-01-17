import React, {useRef} from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_swew82e', 'template_qwvka94', form.current, 'zwwLZnCGUY1T2qiET')
    
    e.target.reset()
  };
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

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Nombre Completo' requerid />
          <input type="email" name="mail" placeholder='Correo Electrónico' requerid />
          <textarea name="message" rows="7" placeholder='Mensaje' requerid ></textarea>
          <button type='submit' className='btn btn-primary'>Enviar Mensaje</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
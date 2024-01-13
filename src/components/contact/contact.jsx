import React, { useState } from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { sendEmail } from './sendMessage.js'

const Contact = () => {
  
  const [toEmail, setToEmail] = useState('');
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
      e.preventDefault();
      await sendEmail(toEmail, name, subject, content);
      setToEmail('');
      setName('');
      setSubject('');
      setContent('');
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

        <form onSubmit={handleSubmit}>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Nombre Completo' requerid />
          <input type="email" value={toEmail} onChange={(e) => setToEmail(e.target.value)} placeholder='Correo Electrónico' requerid />
          <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder='Subject' requerid />
          <textarea value={content} onChange={(e) => setContent(e.target.value)} rows="7" placeholder='Mensaje' requerid ></textarea>
          <input type='submit' className='btn btn-primary' value='Enviar Mensaje'></input>
        </form>
      </div>
    </section>
  )
}

export default Contact
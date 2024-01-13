/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Gabriel Piñero</a>

      <ul className='url__permalinks'>
        <li><a href="#">Inicio</a></li>
        <li><a href="#about">Acerca de Mí</a></li>
        <li><a href="#Experience">Experiencias</a></li>
        <li><a href="#Services">Servicios</a></li>
        <li><a href="#portfolio">Portafolio</a></li>
        <li><a href="#contact">Contáctame</a></li>
      </ul>

      <div className="footer__copyright">
        <small>&copy; Gabriel Piñero. All rights Reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
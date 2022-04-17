import React from 'react'
import './header.css'
import CTA from './CTA'
import foto from '../../assets/foto.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hola Soy</h5>
        <h1>Gabriel Piñero</h1>
        <h5 className="text-light">Programador Python</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img src={foto} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
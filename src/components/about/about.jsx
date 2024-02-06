import React from 'react'
import './about.css'
import foto from '../../assets/about.png'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Conoce Más</h5>
      <h2>Acerca de Mí</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={foto} alt="about_me"/>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experiencia</h5>
              <small>+4 años desarrollando</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Proyectos</h5>
              <small>+20 Completados</small>
            </article>
          </div>

          <p>
            Programador y Desarrollador con experiencia en la creación de código. 
            Dominio de varias plataformas, lenguajes y sistemas integrados. 
            Experiencia en las herramientas y procedimientos de desarrollo más 
            vanguardistas. Capaz de autogestión eficaz en proyectos 
            independientes. Buenas habilidades de colaboración dentro de un 
            equipo productivo.
          </p>

          <a href="#contact" className='btn btn-primary'>Hablemos</a>
        </div>
      </div>
    </section>
  )
}

export default About
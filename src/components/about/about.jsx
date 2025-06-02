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
              <small>+6 años desarrollando</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Proyectos</h5>
              <small>+20 Completados</small>
            </article>
          </div>

          <p>
            Desarrollador con más de 6 años de experiencia en
            la creación de aplicaciones escalables y eficientes. Especializado
            en la automatización de flujos de trabajo y en el desarrollo de
            soluciones robustas utilizando Python. Experto en la implementación
            de pipelines de datos e integración de servicios en la nube con AWS.
            Apasionado por la programación y la resolución de problemas, 
            optimizando procesos y aumentando la eficiencia operativa, contribuyendo
            al éxito del equipo y de la organización.
          </p>

          <a href="#contact" className='btn btn-primary'>Hablemos</a>
        </div>
      </div>
    </section>
  )
}

export default About
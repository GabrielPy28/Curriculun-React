import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>Lo que Ofrezco</h5>
      <h2>Mis Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Diseño UI/UX</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Diseño de Interfaces.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Diseño de Wireframe.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Diseño de Interacción.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Interpretacion de Datos.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Empatía.</p>
            </li>
          </ul>
        </article>
        {/*End UI/UX*/}
        <article className="service">
          <div className="service__head">
            <h3>Desarrollo Web</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Capacidad de Diseño.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Conocimiento de Infraestructura IT.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Integración de Código.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Programación Back-end.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Diseño de Bases de Datos.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Analisis de Fallas.</p>
            </li>
          </ul>
        </article>
        {/*End Web Development*/}
        <article className="service">
          <div className="service__head">
            <h3>Creación de Contenido</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Conocimiento SEO.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Pensamiento Analítico.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Actualización Permanente.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Atención al Detalle.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Innovación.</p>
            </li>
          </ul>
        </article>
        {/*End Content Creation*/}
      </div>
    </section>
  )
}

export default Services
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
        <article className="service">
          <div className="service__head">
            <h3>Ingeniería de Datos</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Diseño y Desarrollo de Procesos ETL</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Diseño, Prueba y Mantenimiento de la Arquitectura</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Automatización y Scripting.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Análisis, Procesamiento y Visualización de Datos.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Evaluación y Mejora del Rendimient.</p>
            </li>
          </ul>
        </article>
        {/*End Data Engineer*/}
        <article className="service">
          <div className="service__head">
            <h3>Desarrollo de Software</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Capacidad de Análisis y Diseño de software.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Conocimiento de Infraestructura IT.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Integración y Desarrollo Continuo de Código.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Ejecución de Pruebas Unitarias.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Creación y Gestión de Bases de Datos.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Gestión de Proyectos.</p>
            </li>
          </ul>
        </article>
        {/*End Soft Development*/}
      </div>
    </section>
  )
}

export default Services
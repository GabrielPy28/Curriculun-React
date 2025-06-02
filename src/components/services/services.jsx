import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>Lo que Ofrezco</h5>
      <h2>Mis Servicios</h2>

      <div className="container services__container">

        {/* Desarrollador Python */}
        <article className="service">
          <div className="service__head">
            <h3>Desarrollador Python</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Desarrollo de APIs con FastAPI, Flask y Django.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Automatización de procesos y tareas con Celery.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Implementación de Web Scraping para extracción de datos.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Despliegue y gestión de aplicaciones con Docker y AWS.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Integración de soluciones en infraestructura cloud.</p>
            </li>
          </ul>
        </article>

        {/* Ingeniero de Datos */}
        <article className="service">
          <div className="service__head">
            <h3>Ingeniero de Datos</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Diseño y desarrollo de pipelines ETL con Apache Airflow y AWS Glue.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Procesamiento de grandes volúmenes de datos con Spark y Hadoop.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Integración y gestión de sistemas de mensajería como Kafka.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Optimización y monitoreo de arquitecturas de datos.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Automatización de tareas mediante scripting y herramientas cloud.</p>
            </li>
          </ul>
        </article>

        {/* Científico de Datos */}
        <article className="service">
          <div className="service__head">
            <h3>Científico de Datos</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Análisis y manipulación de datos con Pandas y Polars.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Visualización avanzada con Matplotlib, Seaborn y Plotly.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Desarrollo de modelos de Machine Learning con Scikit-learn.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Aplicación de técnicas de NLP y AI en proyectos prácticos.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Uso de plataformas SageMaker, DialogFlow y Lex para soluciones AI.</p>
            </li>
          </ul>
        </article>

        {/* Analista de Datos */}
        <article className="service">
          <div className="service__head">
            <h3>Analista de Datos</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Consultoría y creación de reportes con Power BI, Tableau y QuickSight.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Gestión y consulta avanzada de bases de datos.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Diseño de dashboards interactivos y visualizaciones efectivas.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Storytelling con datos para la toma de decisiones estratégicas.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Optimización de procesos de análisis y presentación de resultados.</p>
            </li>
          </ul>
        </article>

        {/* Arquitecto de Soluciones en la Nube */}
        <article className="service">
          <div className="service__head">
            <h3>Arquitecto de Soluciones en la Nube</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Diseño y despliegue de arquitecturas cloud híbridas, públicas y privadas.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Implementación de infraestructura como código con Terraform y CloudFormation.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Optimización y seguridad de servicios en AWS, Google Cloud y otros proveedores.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Configuración de pipelines de datos y soluciones escalables en la nube.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Gestión avanzada de recursos, secretos y distribución con AWS Lambda, S3, CloudFront y Secrets Manager.</p>
            </li>
          </ul>
        </article>

        {/* Machine Learning e IA */}
        <article className="service">
          <div className="service__head">
            <h3>Machine Learning e IA</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Desarrollo e implementación de modelos de Machine Learning supervisado y no supervisado.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Entrenamiento y despliegue de modelos con SageMaker y otras plataformas.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Aplicación de técnicas de NLP para análisis y generación de lenguaje natural.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Integración de IA conversacional con DialogFlow y Lex.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Evaluación, optimización y mantenimiento continuo de modelos AI.</p>
            </li>
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Services

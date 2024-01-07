import React from 'react'
import './portfolio.css'
import img1 from '../../assets/tienda.jpg'
import img2 from '../../assets/clima.jpg'
import img3 from '../../assets/dashboards.png'
import img4 from '../../assets/PyWeather.jpg'
import img5 from '../../assets/flaskbot.png'
import img6 from '../../assets/translater.png'
import img7 from '../../assets/sudoku.png'

const data = [
  {
    id: 1,
    image: img1,
    title: 'Django-Ecommerce con Paypal',
    github: 'https://github.com/GabrielPy28/Django-Ecommerce.git'
  },
  {
    id: 2,
    image: img2,
    title: 'App del Tiempo con JavaScript',
    github: 'https://github.com/GabrielPy28/mini-proyecto-clima.git'
  },
  {
    id: 3,
    image: img3,
    title: 'Dashboard para Data Analysis con Python',
    github: 'https://github.com/GabrielPy28/Python-Dashboard'
  },
  {
    id: 4,
    image: img4,
    title: 'ETL With Python + Airflow and AWS S3',
    github: 'https://github.com/GabrielPy28/PyWeather'
  },
  {
    id: 5,
    image: img5,
    title: 'Chatbot con Flask y DialoGPT-medium',
    github: 'https://github.com/GabrielPy28/Flaskbot'
  },
  {
    id: 6,
    image: img6,
    title: 'Traductor de Texto con Tkinter y Googletrans',
    github: 'https://github.com/GabrielPy28/Translator'
  },
  {
    id: 7,
    image: img7,
    title: 'Solucionador de Sudokus 9x9',
    github: 'https://github.com/GabrielPy28/mis-proyectos-/tree/main/Solución%20Sudoku%20con%20Python'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Trabajos Recientes</h5>
      <h2>Mi Portafolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github}) => {
            return(
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-img">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target={"__blank"}>ver proyecto</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio

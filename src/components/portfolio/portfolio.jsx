import React from 'react'
import './portfolio.css'
import img1 from '../../assets/tienda.jpg'
import img2 from '../../assets/clima.jpg'
import img3 from '../../assets/dashboards.png'
import img4 from '../../assets/PyWeather.jpg'
import img5 from '../../assets/flaskbot.png'
import img6 from '../../assets/invaders_ships.jpg'
import img7 from '../../assets/translater.png'
import img8 from '../../assets/sudoku.png'

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
    title: 'Dashboard para Data Analysis',
    github: 'https://github.com/GabrielPy28/Python-Dashboard'
  },
  {
    id: 4,
    image: img4,
    title: 'ETL con Python, Airflow y AWS',
    github: 'https://github.com/GabrielPy28/PyWeather'
  },
  {
    id: 5,
    image: img5,
    title: 'Chatbot con Flask y DialoGPT',
    github: 'https://github.com/GabrielPy28/Flaskbot'
  },
  {
    id: 6,
    image: img6,
    title: 'Pygame: Invaders Ships',
    github: 'https://github.com/GabrielPy28/invaders-ships'
  },
  {
    id: 7,
    image: img7,
    title: 'Traductor de Texto',
    github: 'https://github.com/GabrielPy28/Translator'
  },
  {
    id: 8,
    image: img8,
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

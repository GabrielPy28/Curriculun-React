import React from 'react'
import './portfolio.css'
import img1 from '../../assets/tienda.jpg'
import img2 from '../../assets/data_pipeline.jpg'
import img3 from '../../assets/web_traffic.png'
import img4 from '../../assets/moviRec.png'
import img5 from '../../assets/PyWeather.jpg'
import img6 from '../../assets/pydetecting.jpg'
import img7 from '../../assets/crypto_analysis.jpg'
import img8 from '../../assets/flaskbot.png'
import img9 from '../../assets/fastapi.jpg'
import img10 from '../../assets/api-serverless.jpeg'
import img11 from '../../assets/IoT.jpg'
import img12 from '../../assets/invaders_ships.jpg'
import img13 from '../../assets/translater.png'
import img14 from '../../assets/sudoku.png'
import img15 from '../../assets/clima.jpg'

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
    title: 'End-to-End Regulatory Data Pipeline',
    github: 'https://github.com/GabrielPy28/regulatory-monitoring-system-SUCOP'
  },
  {
    id: 3,
    image: img3,
    title: 'Explorador de tráfico web',
    github: 'https://webtrafficexplorer-e8nsb3hvp6kyknspboaxqh.streamlit.app'
  },
  {
    id: 4,
    image: img4,
    title: 'Movie Recommendation System',
    github: 'https://github.com/GabrielPy28/MovieRecApp'
  },
  {
    id: 5,
    image: img5,
    title: 'ETL con Python, Airflow y AWS',
    github: 'https://github.com/GabrielPy28/PyWeather'
  },
  {
    id: 6,
    image: img6,
    title: 'Detección de Fraudes de Pago',
    github: 'https://github.com/GabrielPy28/PyDetecting'
  },
  {
    id: 7,
    image: img7,
    title: 'Crypto Data Storage',
    github: 'https://github.com/GabrielPy28/crypto--technical-analysis'
  },
  {
    id: 8,
    image: img8,
    title: 'Chatbot con Flask y DialoGPT',
    github: 'https://github.com/GabrielPy28/Flaskbot'
  },
  {
    id: 9,
    image: img9,
    title: 'FastAPI con Autenticación JWT',
    github: 'https://github.com/GabrielPy28/FastAPI-JWT'
  },
  {
    id: 10,
    image: img10,
    title: 'REST API Serverless',
    github: 'https://github.com/GabrielPy28/API-Serverless'
  },
  {
    id: 11,
    image: img11,
    title: 'AWS IoT and Python',
    github: 'https://github.com/GabrielPy28/Home-Automation-System'
  },
  {
    id: 12,
    image: img12,
    title: 'Pygame: Invaders Ships',
    github: 'https://github.com/GabrielPy28/invaders-ships'
  },
  {
    id: 13,
    image: img13,
    title: 'Traductor de Texto',
    github: 'https://github.com/GabrielPy28/Translator'
  },
  {
    id: 14,
    image: img14,
    title: 'Solucionador de Sudokus 9x9',
    github: 'https://github.com/GabrielPy28/mis-proyectos-/tree/main/Solución%20Sudoku%20con%20Python'
  },
  {
    id: 15,
    image: img15,
    title: 'App del Tiempo con JavaScript',
    github: 'https://github.com/GabrielPy28/mini-proyecto-clima.git'
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

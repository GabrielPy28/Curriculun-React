import React from 'react'
import './portfolio.css'
import img1 from '../../assets/tienda.jpg'
import img2 from '../../assets/clima.jpg'
import img3 from '../../assets/dashboards.png'

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
    github: 'https://python-dash-app.onrender.com'
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
                  <a href={github} className='btn' target={"__blank"}>visualize</a>
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
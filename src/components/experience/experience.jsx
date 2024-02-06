import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experiences'>
      <h5>Experiencias que Tengo</h5>
      <h2>Mis Habilidades</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Desarrollo Frontend</h3>
          <div className="experience__container">
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Intermedio</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermedio</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Intermedio</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Intermedio</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Tailwind</h4>
                <small className='text-light'>Básico</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Intermedio</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Laravel</h4>
                <small className='text-light'>Básico</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Flutter</h4>
                <small className='text-light'>Intermedio</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Angular.Js</h4>
                <small className='text-light'>Básico</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>TypeScript</h4>
                <small className='text-light'>Intermedio</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
        <h3>Desarrollo Backend</h3>
          <div className="experience__container">
              <article className="experience__details">
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Python</h4>
                  <small className='text-light'>Experimentado</small>
                </div>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>SQL / NoSQL</h4>
                  <small className='text-light'>Experimentado</small>
                </div>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>C++</h4>
                  <small className='text-light'>Intermedio</small>
                </div>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Docker</h4>
                  <small className='text-light'>Intermedio</small>
                </div>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Java</h4>
                  <small className='text-light'>Intermedio</small>
                </div>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Node.Js</h4>
                  <small className='text-light'>Intermedio</small>
                </div>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>GraphQL</h4>
                  <small className='text-light'>Intermedio</small>
                </div>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>AWS</h4>
                  <small className='text-light'>Intermedio</small>
                </div>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Jenkins</h4>
                  <small className='text-light'>Básico</small>
                </div>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Terraform</h4>
                  <small className='text-light'>Básico</small>
                </div>
              </article>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
import React from 'react'
import Currículum from '../../assets/Currículum.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={Currículum} download className='btn'>Descargar CV</a>
        <a href="#contact" className='btn btn-primary'>Hablemos</a>
    </div>
  )
}

export default CTA
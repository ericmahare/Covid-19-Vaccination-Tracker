import React from 'react'
import map from '../images/africa.svg'
const Hero = () => {
  return (
    <div className='hero'>
      <div className='fade'></div>
      <div className='hero-img-container'>
        <img src={map} alt='Africa' className='hero-img'/>
      </div>
      <div className='hero-info'>
        <h2>Africa Total Vaccination</h2>
        <h2>23,000</h2>
      </div>
    </div>
  )
}

export default Hero
import React from 'react'
const Hero = ({ map, country, vaccinated, total}) => {
  return (
    <div className='hero'>
      <div className='hero-img-container'>
        <img src={map} alt='Africa' className={country ? 'flag' : 'hero-img'}/>
      </div>
      <div className='hero-info'>
        <h2>{country ? country : 'Africa Total Vaccination'}</h2>
        <h2>{vaccinated ? `(${vaccinated.toLocaleString()}) people vaccinated` : `${total.toLocaleString()} people vaccinated` }</h2>
      </div>
    </div>
  )
}

export default Hero
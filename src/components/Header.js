import React from 'react'
import Hero from './Hero'
import { Link } from "react-router-dom";

const Header = ({ img, vaccinated, country, total }) => {
  return (
    <header>
      <nav>
        <ul className='nav-list'>
          <li>{country ? <li className='back'><Link to='/'>{`<`}</Link></li> : '2022'}</li>
          <li>Covid-19 Vaccination</li>
          <li>
            <i className="fa-solid fa-microphone"></i>
            <i className="fa-solid fa-gear"></i>
          </li>
        </ul>
      </nav>
      <Hero map={img} country={country} vaccinated={vaccinated} total={total}/>
    </header>
  )
}

export default Header
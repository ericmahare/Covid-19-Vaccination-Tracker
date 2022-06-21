import React from 'react'
import Hero from './Hero'

const Header = () => {
  return (
    <header>
      <nav>
        <ul className='nav-list'>
          <li>2022</li>
          <li>Covid-19 Vaccination</li>
          <li>
            <i class="fa-solid fa-microphone"></i>
            <i class="fa-solid fa-gear"></i>
          </li>
        </ul>
      </nav>
      <Hero/>
    </header>
  )
}

export default Header
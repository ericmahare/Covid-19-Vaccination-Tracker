import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import Header from './Header';

const CountryData = () => {
  let params = useParams();
  const {country_name} = params;
  // single country url
  const url = `https://covid-api.mmediagroup.fr/v1/vaccines?country=${country_name}`

  // fetched data
  const [data, setData] = useState({})
    
  const fetchCountry = async () => {
      await fetch(url)
      .then(res => res.json())
      .then(info => setData(info))
  }

  useEffect(() => {
    fetchCountry()
  },[])

  if(Object.keys(data).length) {
    const {abbreviation, administered, location, people_vaccinated, population, updated, life_expectancy, capital_city, people_partially_vaccinated, sq_km_area, country} = data.All
    
    return (
      <>
      <Header img={`https://countryflagsapi.com/png/${abbreviation}`} country={country} vaccinated={people_vaccinated}/>
        <ul className='country-data'>
          <li className='country-details'>
            <span>Location</span> 
            <span>{location}</span>
          </li>
          <li className='country-details'>
            <span>Square Km</span> 
            <span>{sq_km_area.toLocaleString()} sq_km</span>
          </li>
          <li className='country-details'>
            <span>Population</span> 
            <span>
              {population.toLocaleString()}
            </span>
            </li>
          <li className='country-details'>
            <span>life Expectancy</span> 
            <span>{life_expectancy}</span>
          </li>
          <li className='country-details'>
           <span>Capital City</span> 
            <span>{capital_city}</span>
          </li>
          <li className='country-details'>
            <span>administered Vaccination</span>
            <span>{administered.toLocaleString()}</span>
          </li>
          <li className='country-details'>
            <span>People Vaccinated</span> 
            <span>{people_vaccinated.toLocaleString()}</span>
            </li>
          <li className='country-details'>
            <span> People Partially Vaccinated </span>
            <span>{people_partially_vaccinated.toLocaleString()}</span>
           </li>
          <li className='country-details'>
            <span>Data last updated on </span>
            <span>{updated}</span>
          </li>
        </ul>
      </>
    )
  }
 
}

export default CountryData
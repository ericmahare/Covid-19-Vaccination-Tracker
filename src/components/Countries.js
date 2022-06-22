import { useEffect } from 'react'
import { fetchData } from '../redux/countries/countries';
import { useDispatch, useSelector } from "react-redux"
import Country from './Country';
import Header from './Header';
import map from '../images/africa.svg'

const Countries = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchData())
  },[])

  const countries = useSelector(state => state.countries)
  
  let allCountries = [];
  for(let country in countries) {
      for( let data in countries[country]) {
        allCountries = [...allCountries, countries[country][data]];
      }
  }
  let total = 0;
  allCountries.forEach(country => {
    total += country.administered;
  });
  console.log(total)

  return (
    <>
    <Header img={map} total={total}/>
      <div className='headline'>
        <h2>Vaccination by Country</h2>
      </div>
      <section className='countries'>
        {
          allCountries.map(country => <Country key={country.abbreviation} info={country}/>)
        }
      </section>
    </>
  )
}

export default Countries
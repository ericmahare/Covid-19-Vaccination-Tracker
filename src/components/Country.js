import { Link } from "react-router-dom";
const Country = ({ info }) => {
  const {administered, country, abbreviation} = info
  return (
      <div className="country-card">
    <Link to={`/${country}`}>
      <img src={`https://countryflagsapi.com/png/${abbreviation}`} alt='country-flag' className='country-icon'/>
      <div className='card-text'>
        <h2>{country}</h2>
        <h2>{administered.toLocaleString()}</h2>
      </div>
      <div className='card-arrow'>
          <p><i className="fa-solid fa-circle-arrow-right"></i></p>
      </div>
    </Link>
      </div>
  )
}
export default Country;
const Country = () => {
  return (
    <div className="country-card">
     <img src='https://countryflagsapi.com/png/nigeria' alt='country-flag' className='country-icon'/>
     <div className='card-text'>
      <h2>Kenya</h2>
      <h2>153,000</h2>
     </div>
     <div className='card-arrow'>
        <p><i class="fa-solid fa-circle-arrow-right"></i></p>
     </div>
    </div>
  )
}
export default Country;
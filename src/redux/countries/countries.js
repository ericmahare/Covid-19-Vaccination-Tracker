const DISPLAY = 'DISPLAY'
const url = 'https://covid-api.mmediagroup.fr/v1/vaccines?continent=Africa'

const displayData = (country) => ({
  type: DISPLAY,
  country
})

// fetch countries
export const fetchData = () => async (dispatch) => {
  await fetch(url)
  .then(res => res.json())
  .then(data => dispatch(displayData(data)))
}

// countries reducer 
const reducer = (state = {}, action) => {
  switch(action.type) {
    case DISPLAY:
      return action.country
    default:
      return state;
  }
}

export default reducer;
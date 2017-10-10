import axios from 'axios'
const API_KEY = '662ca8a19fb18e15a2fd10663ceb59d9'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`
export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`
  const request = axios.get(url) //make AJAX request with axios
  // payload is an optional property that contains extra info to describe particular action
  console.log('Request:',request)
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}

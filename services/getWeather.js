import { API_KEY, UnitMet, LangEsp } from "./settings"

const fromApiResponseToData = apiResponse => {
  const logica = [apiResponse.main,apiResponse.name,apiResponse.weather]
  return logica

}
  
export default function getWeather(keyword = '') {
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${keyword}&appid=${API_KEY}&units=${UnitMet}&lang=${LangEsp}`
  
  return fetch(apiURL)
    .then((res) => res.json())
    .then(fromApiResponseToData)
}
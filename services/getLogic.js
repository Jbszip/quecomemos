import { API_KEY, UnitMet, LangEsp } from "./settings"

const fromApiResponseToData = apiResponse => {
  const clima = [apiResponse.main,apiResponse.name]
  if(apiResponse.cod == '404'){
    return ['nocity', clima]
  } else if(clima[0].temp <= 13){
    return ['frio', clima]
  }else if(clima[0].temp >13 && clima[0].temp <23){
    return ['templado', clima]
  }else{
    return ['calor', clima]
  }
}
  
export default function getLogic({keyword} = {}) {
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${keyword}&appid=${API_KEY}&units=${UnitMet}&lang=${LangEsp}`
  
  return fetch(apiURL)
    .then((res) => res.json())
    .then(fromApiResponseToData)
}
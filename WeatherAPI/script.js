import { convertKtoC } from "./convertTemp.js";

const btnEl = document.querySelector('.btn');
const mainEl = document.getElementById('main1');
const inputEl = document.querySelector('.inputContainer');

const api_key = ''; 
// get your personal api key from open weather api

async function fetchingData(data){
  if(data){
    try{
      const APIURL = `https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=${api_key}`;
      const weatherData = await axios(APIURL);
      generatingData(weatherData);
    }
    catch(error){
      console.error(error);
      window.alert("City is not in the system/Problem with fetching");
    }
  }
  else{
      window.alert("Please enter a city");
  }
 
}


function generatingData(data)
{
  const {name: city,
         main: {temp, humidity,pressure},
         wind: {speed},
         weather: [{description}]} = data.data;

  
  const celciusTemp = convertKtoC(temp);  
  mainEl.textContent='';

  const showCity = document.createElement("h1");
  const showTemp = document.createElement("p");
  const showDesc = document.createElement("p");
  const showHumidity = document.createElement("p");
  const showPressure = document.createElement("p");
  const showWind = document.createElement("p");
  
  showCity.classList.add("showCity");
  showTemp.classList.add("showTemp");
  showDesc.classList.add("showDesc");
  showHumidity.classList.add("showHumidity");
  showPressure.classList.add("showPressure");
  showWind.classList.add("showWind");
  
  mainEl.appendChild(showCity);
  mainEl.appendChild(showTemp);
  mainEl.appendChild(showDesc);
  mainEl.appendChild(showHumidity);
  mainEl.appendChild(showPressure);
  mainEl.appendChild(showWind);

  showCity.textContent = city;
  showTemp.textContent = `Temp: ${celciusTemp}°C`;
  showDesc.textContent = description;
  showHumidity.textContent = `Humidity: ${humidity}%`;
  showPressure.textContent = `Atmospheric pressure: ${pressure}hPa`;
  showWind.textContent = `Wind: ${speed}mph`;

}

btnEl.addEventListener('click',()=>{
  fetchingData(inputEl.value);
  inputEl.value='';

});
import render from './render.js';
//globals variables

let weatherData;
let coordinates;
let objetApp = {}
//******************************** */




const apiURL = 'https://www.metaweather.com/api/location/';

const $gps = document.querySelector('#gps');

const locationUser = navigator.geolocation;


$gps.addEventListener('click', getLocation);

//? get the woeid code for the city with the latitude/longitude coordinates
const getDataAPI = async (url) => {
  console.log('consulta url', url);

  try {
    const response = await window.fetch(url);
    const dataJson = await response.json();
 
    if (dataJson[0].woeid) {
      let renderDataWeather = getDataAPI(`${apiURL}${dataJson[0].woeid}`);
    } else {   
      console.log({ dataJson });
     render(dataJson);
     debugger;
    }
  } catch (error) {
    console.log('error',error);
  }
};

const getWeatherData = (codeWoeid) => {};

//obtenemos la localizacion actual del usuario
function getLocation() {
  if (locationUser) {
    locationUser.getCurrentPosition(showPosition);
  } else {
    return 'Geolocation is not supported by this browser.';
  }
  if (objetApp.coordinates) {
    let coordinates = objetApp.coordinates;

    const urlGetWoeid = `${apiURL}search/?lattlong=${coordinates.latitude},${coordinates.longitude}`;
    getDataAPI(urlGetWoeid);
  }
}

function setData(name, value) {
  objetApp[name]=value;  
}

function showPosition(position) {
  let cords = {
    latitude: position.coords.latitude,
    longitude: position.coords.longitude,
  };
  setData('coordinates', cords);
}
export default getLocation();

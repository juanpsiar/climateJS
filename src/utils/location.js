import render from './render';

let coordinates;
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
    console.log({ dataJson });
    if (dataJson[0].woeid) {
      let renderDataWeather = getDataAPI(`${apiURL}${dataJson[0].woeid}`);
      console.log({ renderDataWeather });
    } else {
      return dataJson;
    }
  } catch (error) {
    console.log(error);
  }
};

const getWeatherData = (codeWoeid) => {};

//obtenemos la localizacion actual del usuario
function getLocation() {
  if (locationUser) {
    locationUser.getCurrentPosition(showPosition);
    console.log('location', coordinates);
  } else {
    return 'Geolocation is not supported by this browser.';
  }
  if (coordinates) {
    const urlGetWoeid = `${apiURL}search/?lattlong=${coordinates.latitude},${coordinates.longitude}`;
    getDataAPI(urlGetWoeid)[0].then((data) => console.log({ data }));
  }
}

function setData(dataCoord) {
  coordinates = dataCoord;
}

function showPosition(position) {
  let cords = {
    latitude: position.coords.latitude,
    longitude: position.coords.longitude,
  };
  setData(cords);
}

export default getLocation();

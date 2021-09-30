import render from './render';

let coordinates;
const api = 'https://www.metaweather.com/api/location/search/?lattlong=';

const $gps = document.querySelector('#gps');

const locationUser = navigator.geolocation;

$gps.addEventListener('click', getLocation);

const callApi = async (url) => {
  console.log('consulta url', url);

  try {
    const response = await window.fetch(url);
    const dataJson = await response.json();
    console.log(dataJson);
    render(dataJson);
  } catch (error) {
    console.log(error);
  }
};

//obtenemos la localizacion actual del usuario
function getLocation() {
  if (locationUser) {
    locationUser.getCurrentPosition(showPosition);
    console.log('location', coordinates);
  } else {
    return 'Geolocation is not supported by this browser.';
  }
  if (coordinates) {
    const url = `${api}${coordinates.latitude},${coordinates.longitude}`;
    callApi(url);
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

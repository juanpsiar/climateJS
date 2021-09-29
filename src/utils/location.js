//import { callApi} from './fetchData';

let coordinates;

const $gps = document.querySelector('#gps');

const locationUser = navigator.geolocation;

$gps.addEventListener('click', getLocation);

//obtenemos la localizacion actual del usuario
function getLocation(){
  if (locationUser) {
    locationUser.getCurrentPosition(showPosition);
  } else {
    return 'Geolocation is not supported by this browser.';
  }
};

function setData(dataCoord){
  coordinates = dataCoord;
  console.log(coordinates);
  callApi();
};

function showPosition(position){
  let cords = {
    latitude: position.coords.latitude,
    longitude: position.coords.longitude,
  };
  setData(cords);
};



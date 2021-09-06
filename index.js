var city = document.getElementById('city');

getLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    return 'Geolocation is not supported by this browser.';
  }
};

const setData = (dataCoord) => {
  cords = dataCoord;
  console.log('cords', cords);
};

const showPosition = (position) => {
  let coordinates = {
    Latitude: position.coords.latitude,
    Longitude: position.coords.longitude,
  };
  city.innerHTML = ` Latitude:${position.coords.latitude},
  Longitude: ${position.coords.longitude}`;

  setData(coordinates);
};

console.log('getLocation', getLocation());

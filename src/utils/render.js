function render(json) {
  console.log(json);
  const $columnClimate = document.querySelector('#climateName');
  $columnClimate.textContent = json.consolidated_weather[0].weather_state_name;

  const $columnTemp = document.querySelector('#columnTemp');
  const temp = Math.floor(json.consolidated_weather[0].the_temp) + '℃';
  $columnTemp.textContent = temp;

  const $columnIcon = document.querySelector('#columnIcon');
  const img = $columnIcon.firstElementChild;
  img.src = `https://www.metaweather.com/static/img/weather/${json.consolidated_weather[0].weather_state_abbr}.svg`;
  console.log(img);
  debugger;
  const columCity = document.querySelector('#city');
  columCity.innerHTML = json.title;
}

export default render;

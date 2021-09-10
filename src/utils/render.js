

function render(json) {
    const $columnClimate = document.querySelector('#climateName');
    $columnClimate.textContent = json.weather[0].main;

    const $columnTemp = document.querySelector('#columnTemp');
    const temp =Math.floor(json.main.temp )+ '℃';
    console.log(temp);
    $columnTemp.textContent = temp;
    const $columnIcon = document.querySelector('#columnIcon');
    const img = $columnIcon.firstElementChild;
    img.src = `https://openweathermap.org/img/wn/${json.weather[0].icon}@4x.png`;
    console.log(img);
   
    const columCity = document.querySelector('#city');
    columCity.innerHTML= json.name;
}
 
export default render;
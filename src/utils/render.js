


function render(json) {
    const $columnCity = document.querySelector('#climateName');
    $columnCity.textContent = json.name;

    const $columnTemp = document.querySelector('#columnTemp');
    const temp = getTemp(json.main.temp);
    console.log(temp);
    $columnTemp.textContent = temp;
}
function getTemp(num) {
   const temp = Math.round(num - 273.15);
   return temp;
}
 
export default render;
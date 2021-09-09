import render from "./render";
//fetch a la api
const api = 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=a1a63508e13ab13a25800b56921b28a5';

const callApi = async (url)=>{
    try {
        const response = await window.fetch(url);
        const dataJson = await response.json();
        console.log(dataJson);
        render(dataJson);
        
    } catch (error) {
        console.log(error);
    }
    
}

callApi(api);


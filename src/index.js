import './style/main.scss';
import './utils/location';
import'./utils/column';


//fetch a la api
const api = 'https://www.metaweather.com/api/location/search/?lattlong=36.96,-122.02';

const callApi = async (url)=>{
    try {
        const response = await window.fetch(url);
        const dataJson = await response.json();
        console.log(dataJson);
    } catch (error) {
        console.log(error);
    }
    
}

callApi(api);

import render from './render';

export const callApi = async (city) => {
  /*let api =
    'https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=a1a63508e13ab13a25800b56921b28a5';

  if (city) {
    api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=a1a63508e13ab13a25800b56921b28a5`;
  }*/
  const apiURL = 'https://www.metaweather.com/api/location/';
  const api = `${apiURL}${city}`;
  try {
    const response = await window.fetch(api);
    const dataJson = await response.json();
    console.log(dataJson);
    render(dataJson);
  } catch (error) {
    console.log(error);
  }
};

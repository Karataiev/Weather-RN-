import {API_KEY} from '../component/API_KEY';
import IWeather from '../interface/interface';

const WeatherService = async ({latitude, longitude}: IWeather): void => {
  const url: string = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error: string) {
    console.log(error);
  }
};

export default WeatherService;

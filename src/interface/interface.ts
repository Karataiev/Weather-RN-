export interface ICardWeather {
  temp: {
    max: number;
    min: number;
  };
}

export interface IHeaderWeather {
  temp: {
    day: number;
  };
  weather: {
    description: number;
  };
}

export interface IWeather {
  latitude: number;
  longitude: number;
}

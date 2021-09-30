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

export interface IGranted {
  title: string;
  message: string;
}

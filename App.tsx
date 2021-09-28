import React, {useEffect, useState} from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import Weather from './Component/Weather';
import CoordsService from './service/CoordsService';
import Geolocation from 'react-native-geolocation-service';

const App = () => {
  const [state, setState] = useState({latitude: 0, longitude: 0});

  useEffect(() => {
    CoordsService().then(
      Geolocation.getCurrentPosition(
        position => {
          const coords = position.coords;
          setState(coords);
        },
        error => {
          console.log(error.code, error.message);
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 100000,
        },
      ),
    );
  }, []);

  return (
    <ImageBackground
      style={styles.image}
      source={require('./assets/image/weather_background.jpeg')}>
      <Weather latitude={state.latitude} longitude={state.longitude} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {width: '100%', height: '100%'},
});

export default App;

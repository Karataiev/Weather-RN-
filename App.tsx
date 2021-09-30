import React, {useEffect, useState} from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import Weather from './src/component/Weather';
import CoordsService from './src/service/CoordsService';
import Geolocation from 'react-native-geolocation-service';

const App: React.FC = () => {
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
      source={require('./src/assets/image/weather_background.jpeg')}>
      <Weather latitude={state.latitude} longitude={state.longitude} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {width: '100%', height: '100%'},
});

export default App;

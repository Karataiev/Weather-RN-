import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Platform,
  PermissionsAndroid,
} from 'react-native';

import Geolocation from 'react-native-geolocation-service';
import Weather from './Component/Weather';

const App = () => {
  const [state, setState] = useState({latitude: 0, longitude: 0});

  const requestPermissions = async () => {
    try {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Geolocation Permission',
            message: "App needs access to your phone's location.",
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          Geolocation.getCurrentPosition(
            position => {
              const coords = position.coords;
              console.log(
                'latitude:',
                coords.latitude,
                'longitude:',
                coords.longitude,
              );
              setState(coords);
            },
            error => {
              console.log(error.code, error.message);
            },
            {
              enableHighAccuracy: false,
              timeout: 10000,
              maximumAge: 100000,
            },
          );
        } else {
          console.log('Location permission denied');
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    requestPermissions();
  }, []);

  return (
    <ImageBackground
      style={styles.image}
      source={require('./Component/weather_background.jpeg')}>
      <Weather latitude={state.latitude} longitude={state.longitude} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {width: '100%', height: '100%'},
});

export default App;

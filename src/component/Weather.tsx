import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CardWeather from './CardWeather';
import HeaderWeather from './HeaderWeather';
import WeatherService from '../service/WeatherService';
import IWeather from '../interface/interface';

const Weather: React.FC = ({latitude, longitude}: IWeather) => {
  const [days, setDays] = useState(null);
  const [country, setCountry] = useState('');
  useEffect(() => {
    if (!latitude && !longitude) {
      return;
    }

    WeatherService({latitude, longitude}).then(data => {
      setCountry(data.timezone);
      setDays(data.daily);
    });
  }, [longitude, latitude]);

  const week = days?.slice(1, 8);
  const headerDay = days && days[0];
  return (
    <View style={styles.container}>
      <Text style={styles.country}>{country}</Text>
      {days && (
        <>
          <HeaderWeather {...headerDay} />
          {week.map(day => (
            <CardWeather key={Math.random()} {...day} />
          ))}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  country: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  container: {
    marginTop: 50,
  },
});

export default Weather;

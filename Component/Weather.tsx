import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CardWeather from './CardWeather';
import HeaderWeather from './HeaderWeather';

function Weather({longitude, latitude}) {
  const [days, setDays] = useState(null);
  const [country, setCountry] = useState('');

  useEffect(() => {
    const API_KEY = '5c4156595102a839367c8bcbc557595f';
    if (!latitude && !longitude) {
      return;
    }
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`,
    )
      .then(res => res.json())
      .then(data => {
        console.log('Data List Loaded', data);
        setCountry(data.timezone);
        setDays(data.daily);
      })
      .catch(error => console.log(error.message));
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
}

const styles = StyleSheet.create({
  country: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  container: {
    marginTop: 100,
  },
});

export default Weather;

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import IHeaderWeather from '../interface/interface';

const HeaderWeather: React.FC<IHeaderWeather> = ({temp, weather}) => {
  return (
    <View style={styles.horizontal}>
      <Text style={styles.interval}>{weather[0].description}</Text>
      <Text style={styles.day}>{temp.day}&deg;</Text>
      <Text style={styles.interval}>
        Max. {temp.max}&deg;, min. {temp.min}&deg;
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  day: {
    fontSize: 50,
    color: 'white',
    textAlign: 'center',
    fontWeight: '100',
  },
  interval: {
    color: 'white',
    textAlign: 'center',
    marginBottom: 15,
  },
  horizontal: {
    borderBottomColor: 'white',
    borderBottomWidth: 1,
  },
});

export default HeaderWeather;

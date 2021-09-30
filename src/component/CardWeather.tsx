import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ICardWeather from '../interface/interface';

const CardWeather: React.FC = ({temp}: ICardWeather) => {
  return (
    <View>
      <Text style={styles.temp}>{temp.day}&deg;</Text>
      <Text style={styles.interval}>
        Max. {temp.max}&deg;, min. {temp.min}&deg;
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  temp: {
    marginTop: 5,
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  interval: {
    color: 'white',
    textAlign: 'center',
    marginBottom: 15,
  },
});

export default CardWeather;

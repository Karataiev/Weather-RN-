import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function CardWeather({temp}) {
  return (
    <View>
      <Text style={styles.temp}>{temp.day}&deg;</Text>
      <Text style={styles.interval}>
        Max. {temp.max}&deg;, min. {temp.min}&deg;
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  temp: {
    marginTop: 5,
    fontSize: 20,
    color: 'grey',
    textAlign: 'center',
  },
  interval: {
    color: 'grey',
    textAlign: 'center',
    marginBottom: 15,
  },
});

export default CardWeather;

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';

const getFonts = () => {
  return Font.loadAsync({
    'IM_Hyemin-Regular': require('../../../assets/fonts/IM_Hyemin-Regular.ttf'),
    'IM_Hyemin-Bold': require('../../../assets/fonts/IM_Hyemin-Bold.ttf')
  })
}

const CounterText = ({ count }) => {
  getFonts();
  return (
    <View style={styles.textContainer}>
      <Text style={styles.counterLabel}>Steps : </Text>
      <Text style={styles.counterNumber}>{count}</Text>
    </View>
  );
};

export default CounterText;

const styles = StyleSheet.create({
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  counterLabel: {
    fontSize: 24,
    fontFamily: 'IM_Hyemin-Bold'
  },
  counterNumber: {
    fontSize: 24,
    color: '#0009C4',
    fontFamily: 'IM_Hyemin-Bold'
    
  },
});

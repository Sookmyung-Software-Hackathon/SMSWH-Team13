import React, {useState, useEffect}from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';


const CounterText = ({ count }) => {
  const [fontLoaded, setFontLoaded] = useState(false);
  useEffect(async () => {
      await Font.loadAsync({
          'IM_Hyemin-Regular': require('../../../assets/fonts/IM_Hyemin-Regular.ttf'),
          'IM_Hyemin-Bold': require('../../../assets/fonts/IM_Hyemin-Bold.ttf')

      });
      setFontLoaded(true);
  }, []);
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

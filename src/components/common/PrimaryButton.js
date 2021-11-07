import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Font from 'expo-font';

const getFonts = () => {
  return Font.loadAsync({
    'IM_Hyemin-Regular': require('../../../assets/fonts/IM_Hyemin-Regular.ttf'),
    'IM_Hyemin-Bold': require('../../../assets/fonts/IM_Hyemin-Bold.ttf')
  })
}

const PrimaryButton = ({ onPress, text }) => {
  getFonts();
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#0009C4',
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'IM_Hyemin-Bold',
  },
});

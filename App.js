import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';
import GameScreen from './src/components/screens/GameScreen';
import { StyleSheet, SafeAreaView, Image ,Button,Text,View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TotalCardScreen from  './src/components/common/TotalCardScreen';

const Stack = createStackNavigator();

const store = configureStore();


export default function App(){
  return(
    <Provider store={store}>
      <NavigationContainer styles={{fontFamily: 'IM_Hyemin-Bold.ttf'}}>
        <Stack.Navigator initialRouteName="Game">
          <Stack.Screen name="눈송이 카드 맞추기 게임" component={GameScreen}>
          </Stack.Screen>
          <Stack.Screen name="공대 학과 전체 보기" component={TotalCardScreen}>
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'rgba(211, 211, 211, 0.9)',
    flex: 1,
    fontFamily: 'IM_Hyemin-Regular.ttf'
  },
});

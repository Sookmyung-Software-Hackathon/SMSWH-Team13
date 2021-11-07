import React, { useCallback, useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';
import GameScreen from './src/components/screens/GameScreen';
import { StyleSheet, SafeAreaView, Image ,Button,Text,View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TotalCardScreen from  './src/components/common/TotalCardScreen';
import * as SplashScreen from 'expo-splash-screen';



const Stack = createStackNavigator();

const store = configureStore();

function sleep (ms) {
  return new Promise(
    resolve => setTimeout(resolve, ms)
  );
}

async function delay_splash() {
  await SplashScreen.preventAutoHideAsync();
  await sleep(3000);
  await SplashScreen.hideAsync();    
};

export default function App(){

  const [appIsReady, setAppIsReady] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync(Entypo.font);
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }
  delay_splash();
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

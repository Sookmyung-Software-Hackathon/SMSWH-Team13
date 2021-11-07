import * as Font from "expo-font";
 
export default useFonts = async () =>
  await Font.loadAsync({
    'IM_Hyemin-Regular': require('../assets/fonts/IM_Hyemin-Regular.ttf'),
    'IM_Hyemin-Bold': require('../assets/fonts/IM_Hyemin-Bold.ttf'),
  });
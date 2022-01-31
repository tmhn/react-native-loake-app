import React from 'react';
import AppLoading from 'expo-app-loading';

import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from './src/navigation/TabNavigator';

import { useFonts, PlayfairDisplay_400Regular } from "@expo-google-fonts/playfair-display"


const App = () => {

  let [fontsLoaded] = useFonts({
    PlayfairDisplay_400Regular
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    );
  }
};

export default App;

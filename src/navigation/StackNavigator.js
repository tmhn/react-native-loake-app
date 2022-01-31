import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/Home";
import CollectionScreen from "../screens/Collection";
import BasketScreen from "../screens/Basket";
import WishlistScreen from "../screens/Wishlist";
import ProfileScreen from "../screens/Profile";

const Stack = createStackNavigator();

const screenOptionStyle = {
  // headerStyle: {
  //   // backgroundColor: "#9AC4F8"
  // },
  headerTitleStyle: {
    fontFamily: "PlayfairDisplay_400Regular",
    fontSize: 22
  },
  headerTintColor: "#0d3027",
  headerBackTitle: "Back",
};

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

const CollectionStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="The Loake Collection" component={CollectionScreen} />
    </Stack.Navigator>
  );
}

const BasketStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Basket" component={BasketScreen} />
    </Stack.Navigator>
  );
}

const WishlistStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Wishlist" component={WishlistScreen} />
    </Stack.Navigator>
  );
}

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

export {
  HomeStackNavigator,
  CollectionStackNavigator,
  BasketStackNavigator,
  WishlistStackNavigator,
  ProfileStackNavigator
};
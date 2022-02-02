import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/Home";
import CollectionScreen from "../screens/Collection";
import BasketScreen from "../screens/Basket";
import WishlistScreen from "../screens/Wishlist";
import ProfileScreen from "../screens/Profile";

import ProductScreen from "../screens/Product";

import { WESTMINSTER } from "../constants/colors";
import { ChevronLeftOutlineIcon } from "../components/Icons/ChevronLeftIcon";

const Stack = createStackNavigator();

const screenOptionStyle = {
  // headerStyle: {
  //   // backgroundColor: "#9AC4F8"
  // },
  headerTitleStyle: {
    fontFamily: "JosefinSans_700Bold",
    textTransform: "uppercase",
    fontSize: 14
  },
  headerTintColor: WESTMINSTER,
  headerBackTitleVisible: false,
  headerBackImage: () => <ChevronLeftOutlineIcon width={25} height={25} color={WESTMINSTER} />
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
      <Stack.Screen name="ProductScreen" component={ProductScreen} options={{ headerShown: false }} />
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
      <Stack.Screen name="My Account" component={ProfileScreen} />
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
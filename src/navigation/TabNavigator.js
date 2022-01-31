import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  HomeStackNavigator,
  CollectionStackNavigator,
  BasketStackNavigator,
  WishlistStackNavigator,
  ProfileStackNavigator,
} from "./StackNavigator";

import { HomeOutlineIcon, HomeSolidIcon } from "../components/Icons/HomeIcon"
import { CollectionOutlineIcon, CollectionSolidIcon } from "../components/Icons/CollectionIcon"
import { ShoppingBasketOutlineIcon, ShoppingBasketSolidIcon } from "../components/Icons/ShoppingBagIcon"
import { HeartOutlineIcon, HeartSolidIcon } from "../components/Icons/HeartIcon"
import { UserOutlineIcon, UserSolidIcon } from "../components/Icons/UserIcon"

import { PRIMARY } from "../constants/colors"

const Tab = createBottomTabNavigator();

const screenOptionStyle = {
  headerShown: false,
  tabBarActiveTintColor: PRIMARY,
  tabBarInactiveTintColor: '#9ca3af',
};

const tabIcon = (Icon, SecondaryIcon, focused) => focused ? <Icon style={{ height: 20, width: 20, color: PRIMARY }} /> : <SecondaryIcon style={{ height: 20, width: 20, color: '#9ca3af' }} />

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={screenOptionStyle}>
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{ tabBarIcon: ({ focused }) => tabIcon(HomeSolidIcon, HomeOutlineIcon, focused)}}
      />
      <Tab.Screen
        name="Collection"
        component={CollectionStackNavigator}
        options={{ tabBarIcon: ({ focused }) => tabIcon(CollectionSolidIcon, CollectionOutlineIcon, focused) }}
      />
      <Tab.Screen
        name="Basket"
        component={BasketStackNavigator}
        options={{ tabBarIcon: ({ focused }) => tabIcon(ShoppingBasketSolidIcon, ShoppingBasketOutlineIcon, focused) }}
      />
      <Tab.Screen
        name="Wishlist"
        component={WishlistStackNavigator}
        options={{ tabBarIcon: ({ focused }) => tabIcon(HeartSolidIcon, HeartOutlineIcon, focused) }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackNavigator}
        options={{ tabBarIcon: ({ focused }) => tabIcon(UserSolidIcon, UserOutlineIcon, focused) }}
      />
    </Tab.Navigator>
  )
}

export default BottomTabNavigator;

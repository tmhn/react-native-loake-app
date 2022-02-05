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
import { ShoppingBasketOutlineIcon, ShoppingBasketSolidIcon, ShoppingBasketOutlineWithBadgeIcon, ShoppingBasketSolidWithBadgeIcon } from "../components/Icons/ShoppingBagIcon"
import { HeartOutlineIcon, HeartSolidIcon } from "../components/Icons/HeartIcon"
import { UserOutlineIcon, UserSolidIcon } from "../components/Icons/UserIcon"

import { PRIMARY } from "../constants/colors"

const Tab = createBottomTabNavigator();

const screenOptionStyle = {
  headerShown: false,
  tabBarActiveTintColor: PRIMARY,
  tabBarInactiveTintColor: '#9ca3af',
  tabBarLabelStyle: {
    fontFamily: "JosefinSans_400Regular",
    fontSize: 11,
  }
};

const tabs = [
  {
    name: "HomeScreen",
    label: "Home",
    component: HomeStackNavigator,
    solidIcon: HomeSolidIcon,
    outlineIcon: HomeOutlineIcon
  },
  {
    name: "CollectionScreen",
    label: "Collection",
    component: CollectionStackNavigator,
    solidIcon: CollectionSolidIcon,
    outlineIcon: CollectionOutlineIcon
  },
  {
    name: "BasketScreen",
    label: "Basket",
    component: BasketStackNavigator,
    solidIcon: ShoppingBasketSolidWithBadgeIcon,
    outlineIcon: ShoppingBasketOutlineWithBadgeIcon
  },
  {
    name: "WishlistScreen",
    label: "Wishlist",
    component: WishlistStackNavigator,
    solidIcon: HeartSolidIcon,
    outlineIcon: HeartOutlineIcon
  },
  {
    name: "AccountScreen",
    label: "Account",
    component: ProfileStackNavigator,
    solidIcon: UserSolidIcon,
    outlineIcon: UserOutlineIcon
  }
]

const iconStyle = { height: 20, width: 20 }
const tabIcon = (Icon, SecondaryIcon, focused) => focused ? <Icon style={[iconStyle, { color: PRIMARY }]} /> : <SecondaryIcon style={[iconStyle, { color: '#9ca3af' }]} />
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={screenOptionStyle} labeled={false}>
      {
        tabs.map((tab, index) => (
          <Tab.Screen
            key={`${index}-${tab.name}`}
            name={tab.name}
            component={tab.component}
            options={{ tabBarLabel: tab.label, tabBarIcon: ({ focused }) => tabIcon(tab.solidIcon, tab.outlineIcon, focused) }}
          />
        ))
      }
    </Tab.Navigator>
  )
}

export default BottomTabNavigator;

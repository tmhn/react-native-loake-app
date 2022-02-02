import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { Text, View } from "react-native";
import IconBadge from "react-native-icon-badge";

import { WESTMINSTER } from "../../constants/colors";

export const ShoppingBasketOutlineIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
  >
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 11V7a4 4 0 0 0-8 0v4M5 9h14l1 12H4L5 9z"
    />
  </Svg>
);

const val = 7;
export const ShoppingBasketOutlineWithBadgeIcon = (props) => (
  <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center',}}>
    <IconBadge
      MainElement={
        <ShoppingBasketOutlineIcon width={20} height={20} color="#9ca3af" />
      }
      BadgeElement={
        <Text style={{ color:'#FFFFFF', fontFamily: "JosefinSans_400Regular" }}>{val}</Text>
      }
      IconBadgeStyle={
        {width: 5,
        height: 18,
        marginRight: -15,
        marginTop: -5,
        backgroundColor: WESTMINSTER}
      }
      Hidden={val === 0}
      />
  </View>
)

export const ShoppingBasketSolidIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 20 20"
    fill="currentColor"
    {...props}
  >
    <Path
      fillRule="evenodd"
      d="M10 2a4 4 0 0 0-4 4v1H5a1 1 0 0 0-.994.89l-1 9A1 1 0 0 0 4 18h12a1 1 0 0 0 .994-1.11l-1-9A1 1 0 0 0 15 7h-1V6a4 4 0 0 0-4-4zm2 5V6a2 2 0 1 0-4 0v1h4zm-6 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm7-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
      clipRule="evenodd"
    />
  </Svg>
);

export const ShoppingBasketSolidWithBadgeIcon = (props) => (
  <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center',}}>
    <IconBadge
      MainElement={
        <ShoppingBasketSolidIcon width={20} height={20} color={WESTMINSTER} />
      }
      BadgeElement={
        <Text style={{ color:'#FFFFFF', fontFamily: "JosefinSans_400Regular" }}>{val}</Text>
      }
      IconBadgeStyle={
        {width: 5,
        height: 18,
        marginRight: -15,
        marginTop: -5,
        backgroundColor: WESTMINSTER}
      }
      Hidden={val === 0}
      />
  </View>
)

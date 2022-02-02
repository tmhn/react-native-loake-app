import * as React from "react"
import Svg, { Circle } from "react-native-svg"

export const CircleIcon = (props) => (
  <Svg
    width={14}
    height={14}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-circle"
    {...props}
  >
    <Circle cx={8} cy={8} r={5} />
  </Svg>
);

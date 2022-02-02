import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const CrossIcon = (props) => (
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
      d="M6 18 18 6M6 6l12 12"
    />
  </Svg>
);

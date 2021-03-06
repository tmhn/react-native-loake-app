import * as React from "react"
import Svg, { Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: style */

export const SoleIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path
      style={{
        fill: "#bf933a",
      }}
      d="M406.9 138.1c-1.6-3.9-6-5.7-9.9-4.1-3.9 1.6-5.7 6-4.1 9.9 6.6 15.9 10 34.6 9.7 53.9-.3 24.7-6.7 48.5-17.5 65.9l-79.2-1c-10.4-17.7-16.2-41.6-15.9-66.3.3-25.6 6.8-49.5 18.4-67.2 10.8-16.7 24.7-25.8 39.1-25.6 10.3.1 20.4 5.1 29.2 14.3 2.9 3 7.7 3.2 10.7.3 3-2.9 3.2-7.7.3-10.7-11.7-12.3-25.5-18.9-40-19.1-19.8-.2-38.2 11.3-52 32.5-13.1 20.1-20.5 46.9-20.8 75.3-.4 29.7 6.9 57.5 20.5 78.2 1.4 2.1 3.7 3.4 6.3 3.4l87.5 1.1c1 0 1.9-.2 2.8-.5 1.4-.5 2.7-1.5 3.6-2.8 14.1-20.4 22-48 22.4-77.7.1-21.2-3.7-41.9-11.1-59.8zm-15.3 162.6-93.1-1.1c-4.2 0-7.6 3.3-7.7 7.5l-.8 67.7c-.2 14.4 5.3 28.1 15.4 38.4 10.1 10.4 23.6 16.2 38.1 16.4 6.8.1 13.5-1.1 19.7-3.4 6.9-2.6 13.3-6.7 18.7-12 10.4-10.1 16.2-23.6 16.4-38l.4-36.1v-.4l.4-31.2c0-2-.8-4-2.2-5.4-1.3-1.5-3.2-2.4-5.3-2.4zm-85.7 14.2 77.9.9-.2 16.3-77.9-1 .2-16.2zm77.3 51.9-77.9-.7.2-19.9 77.9 1-.2 19.6zm-39.5 47.6c-19.3-.2-35.2-14.6-38-33.1l76.9.6c-3.2 18.7-19.5 32.8-38.9 32.5zM93.8 198c.4 29.7 8.3 57.3 22.4 77.7.9 1.3 2.1 2.2 3.6 2.8.9.3 1.8.5 2.8.5l87.5-1.1c2.5 0 4.9-1.3 6.3-3.4 13.6-20.7 20.9-48.5 20.5-78.2-.3-28.4-7.7-55.2-20.8-75.3-13.8-21.2-32.2-32.8-52-32.5-14.5.2-28.3 6.8-40 19.1-2.9 3-2.8 7.8.3 10.7 3 2.9 7.8 2.8 10.7-.3 8.8-9.3 18.9-14.2 29.2-14.3 14.4-.2 28.3 8.9 39.1 25.6 11.5 17.8 18.1 41.6 18.4 67.2.3 24.7-5.5 48.6-15.9 66.3l-79.2 1c-10.9-17.4-17.2-41.2-17.5-65.9-.2-19.3 3.1-38 9.7-53.9 1.6-3.9-.2-8.3-4.1-9.9-3.9-1.6-8.3.2-9.9 4.1-7.6 17.8-11.3 38.5-11.1 59.8zm20.9 105c-1.4 1.4-2.2 3.4-2.2 5.4l.4 31.2v.4l.4 36.1c.2 14.4 6 27.9 16.4 38 5.5 5.3 11.8 9.4 18.7 12 6.2 2.3 12.9 3.5 19.7 3.4 14.4-.2 27.9-6 38.1-16.4 10.1-10.4 15.6-24 15.4-38.4l-.8-67.7c0-4.2-3.5-7.5-7.7-7.5l-93.1 1.1c-2 .1-3.9 1-5.3 2.4zm91.2 28.1-77.9 1-.2-16.3 77.9-.9.2 16.2zm-77.7 16.2 77.9-1 .2 19.9-77.9.7-.2-19.6zm.9 34.7 76.9-.6c-2.8 18.5-18.7 32.8-38 33.1-19.4.2-35.8-13.9-38.9-32.5z"
    />
  </Svg>
);

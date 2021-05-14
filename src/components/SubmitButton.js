import * as React from "react"
import Svg, { G, Circle, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SvgComponent(props) {
  return (
    <Svg width={72} height={72} viewBox="0 0 72 72" fill="none" {...props}>
      <G filter="url(#filter0_d)">
        <Circle cx={36} cy={32} r={32} fill="#D90429" />
        <Circle cx={36} cy={32} r={25} fill="#EF233C" />
        <Path
          d="M33.41 26L32 27.41 36.58 32 32 36.59 33.41 38l6-6-6-6z"
          fill="#EDF2F4"
        />
      </G>
      <Defs></Defs>
    </Svg>
  )
}

export default SvgComponent

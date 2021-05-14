import * as React from "react";
import Svg, { Rect, G, Circle, Path, Defs } from "react-native-svg";
import { StyleSheet, Text, View } from "react-native";
import { DarkGrey, MainBG, mainRed } from "../../constants/themes";
function BarButtonBar(props) {
  return (
    <View style={styles.container}>
    <Svg width={344} height={72} viewBox="0 0 344 72" fill="none" {...props}>

        <Rect y={11} width={293} height={45} rx={5} fill={DarkGrey} />

        <G filter="url(#filter0_d)">
          <Circle cx={308} cy={32} r={32} fill="#D90429" />
          <Circle cx={308} cy={32} r={25} fill="#EF233C" />

          <Path
            d="M306.01 41.01c0 1.1.89 1.99 1.99 1.99s1.99-.89 1.99-1.99h-3.98zm8.87-4.19V31c0-3.25-2.25-5.97-5.29-6.69v-.72c0-.88-.71-1.59-1.59-1.59-.88 0-1.59.71-1.59 1.59v.72a6.873 6.873 0 00-5.29 6.69v5.82L299 38.94V40h18v-1.06l-2.12-2.12zM312 33.01h-3v3h-2v-3h-3V31h3v-3h2v3h3v2.01z"
            fill="#EDF2F4"
          />
        </G>

        <Text style={styles.text}>{props.text}</Text>
        <Defs></Defs>

    </Svg>
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    height: 48,
    color: MainBG,
    marginLeft:"7%",
    marginTop:"7%",
  },
  container: {
    margin:"2%"
  },
});
export default BarButtonBar;

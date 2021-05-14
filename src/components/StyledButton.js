import * as React from "react";
import Svg, { Rect, G, Circle, Path, Defs } from "react-native-svg";
import { StyleSheet, Text, View } from "react-native";
import { DarkGrey, MainBG, mainRed } from "../../constants/themes";
function StyledButton(props) {
  return (
    <View style={styles.container}>
       <Svg width={344} height={72} viewBox="0 0 344 72" fill="none" {...props}>
        <Rect y={11} width={293} height={45} rx={5} fill={DarkGrey} />
        <Text style={styles.text}>{props.text}</Text>
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
  },
});
export default StyledButton;

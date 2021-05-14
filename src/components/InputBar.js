import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";
import { View, TextInput, StyleSheet } from "react-native";
import { DarkGrey } from "../../constants/themes";
function InputBar(props) {
  const [text, onChangeText] = React.useState("Placeholder Text");
  return (
    <View>
      {props.isSecure && (
        <Svg
          width={360}
          height={48}
          viewBox="0 0 360 48"
          fill="none"
          {...props}
        >
          <Rect x={0.5} y={0.5} width={359} height={47} rx={11.5} fill="#fff" />
          <Rect
            x={0.5}
            y={0.5}
            width={359}
            height={47}
            rx={11.5}
            stroke="#D0D4D9"
          />
          <Path
            d="M330 13l-9 4v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12v-6l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V24h-7v-5.7l7-3.11v8.8z"
            fill="#D0D4D9"
          />
        </Svg>
      )}
      {!props.isSecure && (
        <Svg
          width={360}
          height={48}
          viewBox="0 0 360 48"
          fill="none"
          {...props}
        >
          <Rect x={0.5} y={0.5} width={359} height={47} rx={11.5} fill="#fff" />
          <Rect
            x={0.5}
            y={0.5}
            width={359}
            height={47}
            rx={11.5}
            stroke="#D0D4D9"
          />
          <Path
            d="M329.99 14c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm3.61 6.34c1.07 0 1.93.86 1.93 1.93 0 1.07-.86 1.93-1.93 1.93-1.07 0-1.93-.86-1.93-1.93-.01-1.07.86-1.93 1.93-1.93zm-6-1.58c1.3 0 2.36 1.06 2.36 2.36 0 1.3-1.06 2.36-2.36 2.36-1.3 0-2.36-1.06-2.36-2.36 0-1.31 1.05-2.36 2.36-2.36zm0 9.13v3.75c-2.4-.75-4.3-2.6-5.14-4.96 1.05-1.12 3.67-1.69 5.14-1.69.53 0 1.2.08 1.9.22-1.64.87-1.9 2.02-1.9 2.68zm2.39 4.11c-.27 0-.53-.01-.79-.04v-4.07c0-1.42 2.94-2.13 4.4-2.13 1.07 0 2.92.39 3.84 1.15-1.17 2.97-4.06 5.09-7.45 5.09z"
            fill="#D0D4D9"
          />
        </Svg>
      )}
      <TextInput
        style={[styles.input]}
        onChangeText={onChangeText}
        placeholder={props.placeholder}
        secureTextEntry={props.isSecure}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    height: 48,
    position: "absolute",
    marginLeft: 15,
    width: "100%",
    color: DarkGrey
  },
});

export default InputBar;

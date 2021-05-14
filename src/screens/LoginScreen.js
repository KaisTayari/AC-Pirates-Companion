import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Header from "../components/Header";
import ACPLogo from "../components/ACPLogo";
import { MainBG } from "../../constants/themes";
import SubmitButton from "../components/SubmitButton";
import InputBar from "../components/InputBar";
import { useNavigation } from "@react-navigation/native";
export default function LoginScreen() {
  const navigation = useNavigation();
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" hidden={true} />
        <Header/>
      <View style={{ paddingTop: "20%" }}>
        <Text style={{ marginLeft: 15 }}>E-mail</Text>
        <InputBar placeholder={"E-mail"} isSecure={false}/>
        <Text style={{ marginTop: 20, marginLeft: 15 }}>Password</Text>
        <InputBar placeholder={"Password"} isSecure={true} />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <SubmitButton style={{marginTop:"5%"}} />
      </TouchableOpacity>
      <ACPLogo size={150} style={{marginTop:"1%"}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MainBG,
    alignItems: "center",
  },
});

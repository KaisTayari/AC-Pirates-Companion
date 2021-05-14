
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
import { useNavigation } from "@react-navigation/native";

export default function WelcomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header />
      <ACPLogo size={390}/>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <SubmitButton />
      </TouchableOpacity>
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

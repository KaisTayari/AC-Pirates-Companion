import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import Header from "../components/Header";
import ACPLogo from "../components/ACPLogo";
import { MainBG,mainRed } from "../../constants/themes";
import SubmitButton from "../components/SubmitButton";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

export default function RemindersScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar style="auto" backgroundColor={mainRed} />
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

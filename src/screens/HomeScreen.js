import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import Header from "../components/Header";
import ACPLogo from "../components/ACPLogo";
import { MainBG,mainRed } from "../../constants/themes";
import BarButtonBar from "../components/BarButtonBar";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>    
      <StatusBar style="auto" backgroundColor={mainRed} />
      <Header style={{marginTop:5}}/>
      <View>
        <TouchableOpacity style={{flexShrink:1}} onPress={() => navigation.navigate("Votes")}>
          <BarButtonBar text="Add a Vote" />
        </TouchableOpacity>
        <TouchableOpacity style={{flexShrink:1}} onPress={() => navigation.navigate("Lineup")}>
          <BarButtonBar text="Create Lineup for next match" />
        </TouchableOpacity>
        <TouchableOpacity  style={{flexShrink:1}} onPress={() => navigation.navigate("Reminders")}>
          <BarButtonBar text="Send reminders" />
        </TouchableOpacity>
      </View>
      <ACPLogo size={150} style={{ marginTop: "1%" }} />
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

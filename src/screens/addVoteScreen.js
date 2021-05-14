import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import Header from "../components/Header";
import ACPLogo from "../components/ACPLogo";
import { DarkGrey, LightGrey, MainBG, mainRed } from "../../constants/themes";
import { useNavigation } from "@react-navigation/native";
import DateTimePicker from "@react-native-community/datetimepicker";
import StyledButton from "../components/StyledButton";

export default function addVotesScreen() {
  const navigation = useNavigation();
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  return (
    <View  style={styles.container}>
    <View  style={styles.wrapper}>
      <TouchableOpacity
        style={{
          backgroundColor: DarkGrey,
          width: "90%",
          borderRadius: 5,
          height: 45,
          marginBottom: "5%",
        }}
        onPress={showDatepicker}
      >
        <Text style={{ textAlign:"center",color: LightGrey}}>Show Date picker!</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: DarkGrey,
          width: "90%",
          borderRadius: 5,
          height: 45,
        }}
        onPress={showTimepicker}
      >
        <Text style={{ textAlign:"center", color: LightGrey }}>Show Time picker!</Text>
      </TouchableOpacity>
      </View>
      <View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: MainBG,
  },
  wrapper: {
    
    alignItems: 'center',
justifyContent: 'center'
  },
});

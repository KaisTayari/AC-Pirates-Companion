import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Header from "../components/Header";
import ACPLogo from "../components/ACPLogo";
import { DarkGrey, MainBG, mainRed } from "../../constants/themes";
import SubmitButton from "../components/SubmitButton";
import { useNavigation } from "@react-navigation/native";
import DateTimePicker from "@react-native-community/datetimepicker";
const dateToReadable = (date) => {
  let str=date.toString().substring(4, 21)
  switch (date.getDay()) {
    case 0:
      return "Sunday ".concat(str);
      break;
    case 1:
      return "Monday ".concat(str);
      break;
    case 2:
       return "Tuesday ".concat(str);
      break;
    case 3:
      return "Wednesday ".concat(str);
      break;
    case 4:
      return "Thursday ".concat(str);
      break;
    case 5:
      return "Friday ".concat(str);
      break;
    case 6:
      return "Saturday ".concat(str);
  }
};
export default function addVoteScreen() {
  const navigation = useNavigation();
  const [date, setDate] = useState(new Date(1598051730000));
  const [isPicked, setisPicked] = useState(0);
  const [Picked, setPicked] = useState(false);
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setisPicked(isPicked + 1);
    setDate(currentDate);
    setPicked(true);
    console.log(dateToReadable(currentDate));
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
    <View style={styles.container}>
      <StatusBar style="auto" backgroundColor={mainRed} />
      <Header />
      <View style={styles.wrapper}>
        <TouchableOpacity
          style={styles.DatePickerButton}
          onPress={showDatepicker}
        >
          <Text style={styles.PickerText}>Show Date picker</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TimePickerButton}
          onPress={showTimepicker}
        >
          <Text style={styles.PickerText}>Show Time picker</Text>
        </TouchableOpacity>
      </View>
      {Picked == true && (
        <Text style={{ textAlign: "center", color: mainRed }}>
          Are you sure to start a vote for training on:
          {"\n"}
          {dateToReadable(date)}?
        </Text>
      )}

      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <SubmitButton style={styles.submitButton} />
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="spinner"
          onChange={onChange}
        />
      )}
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
  wrapper: { paddingTop: "8%", width: "100%" },
  submitButton: { marginTop: "5%" },
  TimePickerButton: {
    backgroundColor: DarkGrey,
    borderRadius: 5,
    height: 45,
    marginHorizontal: "4%",
    justifyContent: "center",
  },
  DatePickerButton: {
    backgroundColor: DarkGrey,
    borderRadius: 5,
    height: 45,
    marginHorizontal: "4%",
    justifyContent: "center",
    marginVertical: "20%",
    marginBottom: "10%",
  },
  PickerText: { textAlign: "center", color: MainBG },
});

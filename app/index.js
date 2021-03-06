import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";

// import { StyleSheet, Text, View } from "react-native";
import { Container } from "./components/Container";

export default class App extends React.Component {
  render() {
    return <Container />;
  }
}

EStyleSheet.build({
  // $outline: 1,
  $primaryBlue: "#4F6D7A",
  $primaryOrange: "#DF7A66",
  $primaryGreen: "#00BD9D",
  $primaryPurple: "#9E768F",
  $white: "#FFFFFF",
  $border: "#E2E2E2",
  $inputText: "#797979",
  $lightGray: "#F0F0F0",
  $darkText: "#343434"
});

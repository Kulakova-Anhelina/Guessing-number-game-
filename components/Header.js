import React from "react";
import { View, StyleSheet, Platform } from "react-native";
import TitleText from "./TitleText";
import Colors from "../constants/colors";

const Header = props => {
  return (
    <View
      style={{
        ...styles.headerBase,
        ...Platform.select({
          ios: styles.headerIOS,
          android: styles.headerAndroid
        })
      }}
    >
      <TitleText style={styles.title}>{props.title}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBase: {
    height: 90,
    width: "100%",
    paddingTop: 36,

    alignItems: "center",
    justifyContent: "center"
  },
  headerIOS: {
    backgroundColor: "white",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1
  },
  headerAndroid: {
    backgroundColor: Colors.primary,
    borderBottomWidth: 0
  },
  title: {
    color: Platform.OS === "ios" ? Colors.primary : "white"
  }
});

export default Header;

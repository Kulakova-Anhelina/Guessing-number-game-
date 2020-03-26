import React from "react";
import { View, StyleSheet, Button, Image, Text } from "react-native";
import BodyFile from "../components/BodyFile";
import TitleText from "../components/TitleText";
import Colors from "../constants/colors";
import MainButton from "../components/MainButton";

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is over</TitleText>
      <View style={styles.imageContainer}>
        <Image
          //source={require("../assets/fonts/original.png")}
          source={{
            uri:
              "https://thumbs.dreamstime.com/b/man-climbing-mountain-man-climbing-mountain-describe-man-reach-his-goal-vector-illustration-170294833.jpg"
          }}
          style={styles.image}
          resizeMode="cover"
          fadeDuration={1000}
        />
      </View>
      <View style={styles.resultContainer}>
        <BodyFile style={styles.resultText}>
          Your phone needed{" "}
          <Text style={styles.highlight}>{props.roundsNumber}</Text> to guess
          the number <Text style={styles.highlight}>{props.userNumber}</Text>
        </BodyFile>
      </View>
      <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  image: {
    width: "100%",
    height: "100%"
  },
  imageContainer: {
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "turquoise",
    width: 300,
    height: 300,
    overflow: "hidden",
    marginVertical: 20
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold"
  },
  resultContainer: {
    marginHorizontal: 20,
    marginVertical: 15
  },
  resultText: {
    textAlign: "center",
    fontSize: 20
  }
});

export default GameOverScreen;

import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  Dimensions,
  ScrollView
} from "react-native";
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
    alignItems: "center",
    paddingVertical: 10
  },

  image: {
    width: "100%",
    height: "100%"
  },
  imageContainer: {
    borderRadius: (Dimensions.get("window").width * 0.7) / 2,
    borderWidth: 3,
    borderColor: "turquoise",
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").width * 0.7,
    overflow: "hidden",
    marginVertical: Dimensions.get("window").height / 30
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold"
  },
  resultContainer: {
    marginHorizontal: 20,
    marginVertical: Dimensions.get("window").height / 60
  },
  resultText: {
    textAlign: "center",
    fontSize: Dimensions.get("window").height < 400 ? 16 : 20
  }
});

export default GameOverScreen;

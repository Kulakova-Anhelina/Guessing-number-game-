import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Alert, FlatList } from "react-native";
import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";
import DefaultStyles from "../constants/default-styles";
import MainButton from "../components/MainButton";
import { Ionicons } from "@expo/vector-icons";
import BodyFile from "../components/BodyFile";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const random = Math.floor(Math.random() * (max - min)) + min;
  if (random === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return random;
  }
};

const renderListItems = (listLength, itemData) => (
  <View style={styles.listItem}>
    <BodyFile>#{listLength - itemData.index} </BodyFile>
    <BodyFile>{itemData.item} </BodyFile>
  </View>
);

const GameScreen = props => {
  const initialGuess = generateRandomBetween(1, 100, props.userChoice);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);
  const [pastGuesses, setPastGuesses] = useState([initialGuess.toString()]);
  const { userChoice, onGameOver } = props;

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(pastGuesses.length);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const nextGuessHandler = direction => {
    if (
      (direction === "lower" && currentGuess < props.userChoice) ||
      (direction === "greater" && currentGuess > props.userChoice)
    ) {
      Alert.alert("Don't lie!!", "You know, that this is wrong", [
        { text: "Sorry", style: "cancel" }
      ]);
      return;
    }
    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess + 1;
    }
    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    //setRounds(curRounds => curRounds + 1);
    setPastGuesses(cuPastGuesses => [nextNumber.toString(), ...cuPastGuesses]);
  };

  return (
    <View style={styles.screen}>
      <Text style={DefaultStyles.title}>Opponents guess: </Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.butonnContianer}>
        <MainButton onPress={nextGuessHandler.bind(this, "lower")}>
          <Ionicons name={"md-remove"} size={24} color="white" />
        </MainButton>
        <MainButton onPress={nextGuessHandler.bind(this, "greater")}>
          <Ionicons name={"md-add"} size={24} color="white" />
        </MainButton>
      </Card>
      <View style={styles.listConrainer}>
        {/* <FlatList contentContainerStyle={styles.list}>
          {pastGuesses.map((guess, index) =>
            renderListItems(guess, pastGuesses.length - index)
          )}
        </FlatList> */}
        {
          <FlatList
            contentContainerStyle={styles.list}
            data={pastGuesses}
            keyExtractor={item => item}
            renderItem={renderListItems.bind(this, pastGuesses.length)}
          ></FlatList>
        }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center"
  },
  butonnContianer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 400,
    maxWidth: "90%"
  },
  listItem: {
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 16,
    marginVertical: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%"
  },
  listConrainer: {
    flex: 1,
    width: '60%'
  },
  list: {
    flexGrow: 1,
    justifyContent: "flex-end"
  }
});

export default GameScreen;

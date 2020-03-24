import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import NumberContainer from "../components/NumberContainer";
import Card from '../components/Card'

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

const GameScreen = props => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, props.userChoice)
  );

  return (
    <View>
      <Text>Opponents guess: </Text>
      <NumberContainer>
          {currentGuess}
      </NumberContainer>
    </View>
  );
};

const styles = StyleSheet.create({});

export default GameScreen;

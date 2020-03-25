import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';

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

  const currentLow = useRef(1)
  const currentHigh = useRef(100)

  const nextGuessHandler = direction => {
    if (
      (direction === 'lower' && currentGuess < props.userChoice) ||
      (direction === 'greater' && currentGuess > props.userChoice)
    ) {
      Alert.alert('Don\'t lie!!', 'You know, that this is wrong', [
        { text: 'Sorry', style: 'cancel' }
      ]);
      return;
    } if(direction === 'lower'){
      currentHigh.current = currentGuess;
    } else{
      currentLow.current = currentGuess;
    }
  const nextNumber =  generateRandomBetween(currentLow.current, currentHigh.current,currentGuess )
  setCurrentGuess(nextNumber)
  };

  return (
    <View style={styles.screen}>
      <Text>Opponents guess: </Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.butonnContianer}>
        <Button title='LOWER' onPress={nextGuessHandler.bind(this, 'lower')} />
        <Button
          title='greater'
          onPress={nextGuessHandler.bind(this, 'greater')}
        />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  butonnContianer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: 300,
    maxWidth: '80%'
  }
});

export default GameScreen;

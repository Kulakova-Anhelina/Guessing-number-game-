import React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import Colors from '../constants/colors'
const MainButton = props => {

  return (
      <TouchableOpacity onPress = {() => {}}>
          <View style ={styles.button}>
          <Text style = {{...styles.buttonText,...props.style }}>{props.children}</Text>
          </View>
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
   backgroundColor: {
       backgroundColor: Colors.primary,
       paddingVertical : 12,
       paddingHorizontal: 30

   }
  },
  buttonText:{
      color: 'white',
      fontFamily: 'open-sans'

  }
});

export default MainButton;

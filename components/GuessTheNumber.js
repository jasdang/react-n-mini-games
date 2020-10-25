import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function GuessTheNumber() {
  return (
    <View style={styles.container}>
      <Text style={styles.gameHeader}>Game Header</Text>
      <View style={styles.square}>
        <Text style={styles.squareContent}>?</Text>
      </View>
      <TextInput placeholder='Type here...' style={styles.textInput} />
      <TouchableOpacity style={styles.button}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: 50,
    backgroundColor: 'steelblue',
  },
  gameHeader: {
    fontWeight: 'bold',
    fontSize: 30,
    backgroundColor: 'skyblue',
  },
  square: {
    backgroundColor: 'lightblue',
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  squareContent: {
    fontWeight: 'bold',
    fontSize: 100,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 4,
  },
});

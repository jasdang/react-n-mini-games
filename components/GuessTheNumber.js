import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function GuessTheNumber() {
  const [result, setResult] = useState(Math.floor(Math.random() * 100));
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);
  const [guess, setGuess] = useState();
  const handlePress = () => {};
  return (
    <View style={styles.container}>
      <Text style={styles.gameHeader}>Game Header</Text>
      <View style={styles.square}>
        <Text style={styles.squareContent}>{result}</Text>
      </View>
      <Text>Current Min: {min}</Text>
      <Text>Current Max: {max}</Text>
      <Text>Your guess: {guess ? guess : '-'}</Text>
      <TextInput
        keyboardType='numeric'
        placeholder='Type here...'
        style={styles.textInput}
        onChangeText={(guess) => setGuess(guess)}
      />
      <TouchableOpacity style={styles.button} onPress={handlePress}>
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

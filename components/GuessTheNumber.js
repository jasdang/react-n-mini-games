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
  const [guess, setGuess] = useState(0);
  const handlePress = () => {
    if (guess > max || guess < min) {
      console.log(typeof guess);
      alert('Your guess is out of the range! Enter another number to submit.');
      return;
    }

    if (guess === result) {
      alert('You win!');
    } else {
      guess < result ? setMin(guess) : setMax(guess);
    }
    setGuess();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.gameHeader}>Game Header</Text>
      <View style={styles.square}>
        <Text style={styles.squareContent}>{result}</Text>
      </View>
      <Text>Current Min: {min}</Text>
      <Text>Current Max: {max}</Text>
      <TextInput
        keyboardType='numeric'
        placeholder='Type here...'
        style={styles.textInput}
        value={guess}
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

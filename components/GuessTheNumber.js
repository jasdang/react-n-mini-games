import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';

export default function GuessTheNumber() {
  const [result, setResult] = useState(Math.floor(Math.random() * 100));
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);
  const [guess, setGuess] = useState(0);
  const [isEnded, setIsEnded] = useState(false);

  return (
    // <View style={styles.container}>
    <KeyboardAvoidingView style={styles.container} behavior='position'>
      <Text style={styles.gameHeader}>Game Header</Text>
      <View style={styles.square}>
        <Text style={styles.squareContent}>{result}</Text>
      </View>
      {isEnded ? (
        <PlayAgain
          setGuess={setGuess}
          guess={guess}
          setMin={setMin}
          min={min}
          setMax={setMax}
          max={max}
          setResult={setResult}
          result={result}
          setIsEnded={setIsEnded}
          isEnded={isEnded}
        />
      ) : (
        <Guessing
          setGuess={setGuess}
          guess={guess}
          setMin={setMin}
          min={min}
          setMax={setMax}
          max={max}
          setResult={setResult}
          result={result}
          setIsEnded={setIsEnded}
          isEnded={isEnded}
        />
      )}
    </KeyboardAvoidingView>
  );
}

function Guessing(props) {
  const handlePress = () => {
    Keyboard.dismiss();

    if (props.guess > props.max || props.guess < props.min) {
      alert('Your guess is out of the range! Enter another number to submit.');
      props.setGuess();
      return;
    }

    if (props.guess === props.result) {
      props.setIsEnded(true);
      alert('You win!');
    } else {
      props.guess < props.result
        ? props.setMin(props.guess)
        : props.setMax(props.guess);
    }
    props.setGuess();
  };

  return (
    <View style={styles.subContainer}>
      <Text>Current Min: {props.min}</Text>
      <Text>Current Max: {props.max}</Text>
      <TextInput
        keyboardType='numeric'
        placeholder='Type here...'
        style={styles.textInput}
        value={props.guess ? props.guess.toString() : ''}
        onChangeText={(guess) => props.setGuess(parseInt(guess))}
      />
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

function PlayAgain(props) {
  const handlePress = () => {
    props.setResult(Math.floor(Math.random() * 100));
    props.setMin(0);
    props.setMax(100);
    props.setGuess();
    props.setIsEnded(false);
    return;
  };

  return (
    <View style={styles.subContainer}>
      <Text>You Win!</Text>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text>Play Again</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: 50,
    backgroundColor: 'steelblue',
  },
  subContainer: {
    height: 200,
    justifyContent: 'space-around',
    alignItems: 'center',
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

import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

export default function TicTacToe() {
  return (
    <View styles={styles.container}>
      <Text>Tic Tac Toe</Text>
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
});

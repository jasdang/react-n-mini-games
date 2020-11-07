import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

export default function TicTacToe() {
  const [cells, setCells] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const handleClick = (i) => {
    let newCells = [...cells];
    newCells[i] = xIsNext ? 'X' : 'O';
    setCells(newCells);
    setXIsNext(!xIsNext);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.gameHeader}>Tic Tac Toe</Text>
      <Text style={styles.gameHeader} onPress={() => handleClick(1)}>
        Next Player is {xIsNext ? 'X' : 'O'}
      </Text>
      <Board />
    </View>
  );
}

function Board() {
  function renderCell() {
    return <Cell />;
  }

  function renderRow() {
    const rows = [];
    for (let i = 0; i < 3; i++) {
      const row = [];
      for (let j = 0; j < 3; j++) {
        const cell = renderCell();
        row.push(cell);
      }
      rows.push(<View style={styles.row}>{row}</View>);
    }
    return rows;
  }

  return <View style={styles.board}>{renderRow()}</View>;
}

function Cell() {
  return (
    <TouchableOpacity>
      <View style={styles.cell}></View>
    </TouchableOpacity>
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
  board: {
    flexDirection: 'column',
    padding: 30,
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    backgroundColor: 'white',
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 4,
    height: 50,
    width: 50,
    marginRight: -4,
    marginTop: -4,
  },
});

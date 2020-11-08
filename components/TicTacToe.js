import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

export default function TicTacToe() {
  const [cells, setCells] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const handleClick = (i) => {
    if (cells[i] !== null) return;
    if (calculateWinner(cells) !== null) return;
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
      <Text style={styles.gameHeader}>Winner is {calculateWinner(cells)}</Text>
      <Board
        cells={cells}
        xIsNext={xIsNext}
        handleClick={(i) => handleClick(i)}
      />
      <TouchableOpacity onPress={() => setCells(Array(9).fill(null))}>
        <Text>Reset</Text>
      </TouchableOpacity>
    </View>
  );
}

function Board(props) {
  function renderCell(value, id) {
    return (
      <Cell value={value} id={id} handleClick={props.handleClick} key={id} />
    );
  }

  function renderRow() {
    const rows = [];
    let id = 0;
    for (let i = 0; i < 3; i++) {
      const row = [];
      for (let j = 0; j < 3; j++) {
        const cell = renderCell(props.cells[id], id);
        row.push(cell);
        id++;
      }
      rows.push(
        <View style={styles.row} key={i}>
          {row}
        </View>
      );
    }
    return rows;
  }

  return <View style={styles.board}>{renderRow()}</View>;
}

function Cell(props) {
  return (
    <TouchableOpacity onPress={() => props.handleClick(props.id)}>
      <View style={styles.cell}>
        <Text style={styles.cellContent}>{props.value}</Text>
      </View>
    </TouchableOpacity>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  cellContent: {
    fontSize: 50,
  },
});

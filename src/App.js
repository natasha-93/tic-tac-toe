import React, { useState } from 'react';
import Box from './Box';

function App() {
  const emptyBoard = ["", "", "", "", "", "", "", "", ""];
  const [board, setBoard] = useState(emptyBoard)
  const [turn, setTurn] = useState("X");

  function handleSelect(i) {
    const newBoard = [...board]
    newBoard[i] = turn
    setTurn(turn === "X" ? "O" : "X")
    setBoard(newBoard)
    const winner = findWinner(newBoard)
    if (winner !== null) {
      alert(`${winner} wins!`)
    }
  }

  function findWinner(board) {
    // HORIZONTAL
    if (board[0] === board[1] && board[1] === board[2] && board[0] !== "") return board[0];
    if (board[3] === board[4] && board[4] === board[5] && board[3] !== "") return board[3];
    if (board[6] === board[7] && board[7] === board[8] && board[6] !== "") return board[6];
    // VERTICAL
    if (board[0] === board[3] && board[3] === board[6] && board[0] !== "") return board[0];
    if (board[1] === board[4] && board[4] === board[7] && board[1] !== "") return board[1];
    if (board[2] === board[5] && board[5] === board[8] && board[2] !== "") return board[2];
    // DIAGONAL
    if (board[0] === board[4] && board[4] === board[8] && board[0] !== "") return board[0];
    if (board[2] === board[4] && board[4] === board[6] && board[2] !== "") return board[2];

    return null
  }

  return (
    <div >
      <div>
        <Box index={0} value={board[0]} onSelect={handleSelect} />
        <Box index={1} value={board[1]} onSelect={handleSelect} />
        <Box index={2} value={board[2]} onSelect={handleSelect} />
      </div>
      <div>
        <Box index={3} value={board[3]} onSelect={handleSelect} />
        <Box index={4} value={board[4]} onSelect={handleSelect} />
        <Box index={5} value={board[5]} onSelect={handleSelect} />
      </div>
      <div>
        <Box index={6} value={board[6]} onSelect={handleSelect} />
        <Box index={7} value={board[7]} onSelect={handleSelect} />
        <Box index={8} value={board[8]} onSelect={handleSelect} />
      </div>
      <button onClick={e => {
        setBoard([...emptyBoard])
      }}>Restart</button>
    </div>
  );
}

export default App;

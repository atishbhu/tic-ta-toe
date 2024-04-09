import React, { useState } from "react";
import Card from "../Card/Card";
import "./grid.css";

const Grid = () => {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [turn, setTurn] = useState(true);
  const [winner, setWinner] = useState(null);

  const winnerDecision = (board, symbol) => {
    if (
      (board[0] === symbol && board[1] === symbol && board[2] === symbol) ||
      (board[3] === symbol && board[4] === symbol && board[5] === symbol) ||
      (board[6] === symbol && board[7] === symbol && board[8] === symbol)
    ) {
      return symbol;
    }

    if (
      (board[0] === symbol && board[3] === symbol && board[6] === symbol) ||
      (board[1] === symbol && board[4] === symbol && board[7] === symbol) ||
      (board[2] === symbol && board[5] === symbol && board[8] === symbol)
    ) {
      return symbol;
    }

    if (
      (board[0] === symbol && board[4] === symbol && board[8] === symbol) ||
      (board[2] === symbol && board[4] === symbol && board[6] === symbol)
    ) {
      return symbol;
    }

    return null;
  };

  const Play = (idx) => {
    board[idx] = turn ? "O" : "X";
    setWinner(winnerDecision(board, board[idx]));
    setBoard([...board]);
    setTurn(!turn);
  };

  const ResetGame = () => {
    setBoard(Array(9).fill(""));
    setWinner(null);
    setTurn(true);
  };

  const isDisable = winner !== null;

  return (
    <>
      {winner && (
        <div>
          <h1>Winner is : {winner}</h1>
          <button onClick={ResetGame}>Reset</button>
        </div>
      )}
      {<h1>Current Turn : {turn ? "O" : "X"}</h1>}
      <div className="grid">
        {board.map((value, idx) => (
          <Card
            key={idx}
            name={value}
            onPlay={() => Play(idx)}
            disable={isDisable}
          />
        ))}
      </div>
    </>
  );
};

export default Grid;

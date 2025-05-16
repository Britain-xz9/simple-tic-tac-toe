"use client";

import Square from "@/components/Square";

// interface
interface BoardProps {
  xIsNext: boolean;
  squares: Array<string>;
  onPlay: (index: Array<string>) => void;
}

// function to determine the winner
export function calculateWinner(squares: Array<string>) {
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
      return "Winner: " + squares[a];
    }
  }

  if (squares.every((square) => square !== null)) {
    return "DRAW. Play again!";
  }

  return null;
}

// test comment

export default function Board({ xIsNext, squares, onPlay }: BoardProps) {
  let status;

  // function to handle click
  function handleClick(i: number) {
    const nextSquares = squares.slice(); // create a copy of squares array

    // check if square have value already
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }

    onPlay(nextSquares);
  }

  // game status
  const winner = calculateWinner(squares);

  if (winner) {
    status = winner;
  } else {
    status = "Next player turn: " + (xIsNext ? "X" : "O");
  }

  return (
    <div className="text-center">
      <h1 className="text-8xl text-black font-bold m-8">
        <span className="text-yellow-300">tic.</span>
        <span className="text-cyan-300">tac.</span>
        <span className="text-yellow-300">toe.</span>
      </h1>

      <div className="board-row ">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>

      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>

      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
      <div className="status text-violet-200 font-bold text-5xl m-4">
        {status}
      </div>
    </div>
  );
}

"use client";

import Board from "@/components/Board";
import BoxScore from "@/components/BoxScore";
import { useState } from "react";

export default function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];

  function handlePlay(nextSquares: Array<string>) {
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  }

  function handleReset() {
    setHistory([Array(9).fill(null)]);
    setXIsNext(true);
  }

  function handleUndo() {
    if (history.length > 1) {
      setHistory(history.slice(0, -1));
      setXIsNext(!xIsNext);
    }
  }

  return (
    <div className="game text-center">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <button
          className="config-button"
          onClick={handleUndo}
          disabled={history.length <= 1}
        >
          Undo
        </button>
        <button
          className="config-button"
          onClick={handleReset}
          disabled={history.length <= 1}
        >
          Reset
        </button>
      </div>

      <div>
        <BoxScore squares={currentSquares} />
      </div>
    </div>
  );
}

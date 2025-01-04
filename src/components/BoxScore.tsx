import React from "react";
import { useState, useEffect } from "react";
import { calculateWinner } from "./Board";

interface BoxScoreProps {
  squares: Array<string>;
}

export default function BoxScore({ squares }: BoxScoreProps) {
  // hook
  const [scoreX, setScoreX] = useState(0);
  const [scoreO, setScoreO] = useState(0);
  const [scoreDraw, setDraw] = useState(0);

  useEffect(() => {
    const winner = calculateWinner(squares);

    if (winner === "Winner: X") {
      setScoreX((prevScore) => prevScore + 1);
    } else if (winner === "Winner: O") {
      setScoreO((prevScore) => prevScore + 1);
    } else if (winner === "DRAW. Play again!") {
      setDraw((prevScore) => prevScore + 1);
    }
  }, [squares]);

  return (
    <div className="box-score-container">
      <div className="box-score bg-cyan-300">
        <div className="box-score-title">Player - X</div>
        <div>
          <span className="score">{scoreX}</span>
        </div>
      </div>

      <div className="box-score bg-gray-300">
        <div className="box-score-title">Draw</div>
        <div>
          <span className="score">{scoreDraw}</span>
        </div>
      </div>

      <div className="box-score bg-yellow-300">
        <div className="box-score-title">Player - O</div>
        <div>
          <span className="score">{scoreO}</span>
        </div>
      </div>
    </div>
  );
}

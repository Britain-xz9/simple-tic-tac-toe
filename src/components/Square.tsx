"use client";

interface SquareProps {
  value: string | null;
  onSquareClick: () => void;
}

export default function Square({ value, onSquareClick }: SquareProps) {
  const textColor =
    value == "X"
      ? "text-cyan-300"
      : value == "O"
      ? "text-yellow-300"
      : "text-yellow-300";

  return (
    <button className={`square-box ${textColor}`} onClick={onSquareClick}>
      {value}
    </button>
  );
}

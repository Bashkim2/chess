import React from "react";
import "../css/App.css";
import "../css/Output.css";

const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
const verticalsAxis = [1, 2, 3, 4, 5, 6, 7, 8];

export default function Chessboard() {
  return (
    <div className="bg-blue-800 w-96 h-96" id="chessboard">
      Chessboard
    </div>
  );
}

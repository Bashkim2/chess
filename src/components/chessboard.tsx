import React from "react";
import "../css/App.css";
import "../css/Output.css";

const verticalsAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
const horizontalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];

export default function Chessboard() {
  let board = [];

  for (let i = verticalsAxis.length - 1; i >= 0; i--) {
    for (let j = 0; j < horizontalAxis.length; j++) {
      const number = i + j + 2;

      if (number % 2 === 0) {
        board.push(
          <div className="h-24 w-24 bg-yellow-600">
            [{horizontalAxis[i]}
            {verticalsAxis[j]}]
          </div>
        );
      } else {
        board.push(
          <div className="h-24 w-24 bg-white">
            [{horizontalAxis[i]}
            {verticalsAxis[j]}]
          </div>
        );
      }
    }
  }
  return (
    <div id="chessboard" className="bg-violet-600 w-96 h-96">
      {board}
    </div>
  );
}

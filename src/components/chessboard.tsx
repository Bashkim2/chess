import React from "react";
import "../css/App.css";
import "../css/Output.css";

const verrticalsAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
const horizontalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];

export default function Chessboard() {
  let board = [];

  for (let i = verrticalsAxis.length - 1; i >= 0; i--) {
    for (let j = 0; j < horizontalAxis.length; j++) {
      const number = i + j + 2;

      if (number % 2 === 0) {
        board.push(
          <div className="h-24 w-24">
            [{horizontalAxis[j]}
            {verrticalsAxis[i]}]
          </div>
        );
      } else {
        board.push(
          <div className="h-24 w-24 bg-lime-600">
            [{horizontalAxis[j]}
            {verrticalsAxis[i]}]
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

import React, { useState, useEffect } from "react";
import "./index.css";

export default function TestBoard() {
  const [dimension, setDimension] = useState(0);
  const [chess, setChess] = useState([]);

  const black = {
    width: "100px",
    height: "100px",
    backgroundColor: "black",
  };

  const white = {
    width: "100px",
    height: "100px",
    backgroundColor: "white",
  };

  const chessBox = {
    width: 100 * dimension,
    display: "flex",
    flexWrap: "wrap",
    marginTop: "20px",
    boxShadow: `0px 10px 10px rgba(0,0,0,0.1)`,
  };

  const makeChessboard = () => {
    let arr = [];
    for (let i = 0; i < dimension; i++) {
      let temp = [];
      for (let j = 0; j < dimension; j++) {
        if ((i + j) % 2) temp.push(<div style={black}></div>);
        else temp.push(<div style={white}></div>);
      }
      arr.push(temp);
    }
    setChess(arr);
  };

  useEffect(() => {
    makeChessboard();
  });

  return (
    <div className="chess">
      <div>
        <h2>
          <span>N x N </span>
          ChessBoard
        </h2>
        <input
          type="number"
          placeholder="Enter the dimension"
          onChange={(e) => setDimension(e.target.value)}
        />
      </div>

      <section style={chessBox}>{chess}</section>
    </div>
  );
}

import "../css/App.css";
import "../css/Output.css";
import Tile from "./tile";

const verticalsAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
const horizontalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];

interface Piece {
  image: string;
  x: number;
  y: number;
}

const pieces: Piece[] = [];

for (let i = 0; i < 8; i++) {
  pieces.push({ image: "B_pawn.png", x: i, y: 6 });
}

for (let i = 0; i < 8; i++) {
  pieces.push({ image: "W_pawn.png", x: i, y: 1 });
}

export default function Chessboard() {
  let board = [];

  for (let i = verticalsAxis.length - 1; i >= 0; i--) {
    for (let j = 0; j < horizontalAxis.length; j++) {
      const number = i + j + 2;
      let image = "";

      pieces.forEach((p) => {
        if (p.x === j && p.y === i) {
          image = p.image;
        }
      });

      board.push(<Tile image={image} number={number} />);
    }
  }
  return (
    <div id="chessboard" className="bg-violet-600 w-96 h-96">
      {board}
    </div>
  );
}

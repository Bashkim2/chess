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

const whitePiece = [
  "W_rock.png",
  "W_knight.png",
  "W_bishop.png",
  "W_queen.png",
  "W_king.png",
  "W_bishop.png",
  "W_knight.png",
  "W_rock.png",
];

const blackPiece = [
  "B_rock.png",
  "B_knight.png",
  "B_bishop.png",
  "B_queen.png",
  "B_king.png",
  "B_bishop.png",
  "B_knight.png",
  "B_rock.png",
];

for (let i = 0; i < 8; i++) {
  pieces.push({ image: blackPiece[i], x: i, y: 7 });
}

for (let i = 0; i < 8; i++) {
  pieces.push({ image: whitePiece[i], x: i, y: 0 });
}

let activePiece: HTMLElement | null = null;

function grabPiece(e: React.MouseEvent) {
  const element = e.target as HTMLElement;
  if (element.classList.contains("chessPiece")) {
    const x = e.clientX - 50;
    const y = e.clientY - 50;
    element.style.position = "absolute";
    element.style.left = `${x}px`;
    element.style.top = `${y}px`;

    activePiece = element;
  }
}

function movePiece(e: React.MouseEvent) {
  const element = e.target as HTMLElement;
  if (activePiece) {
    const x = e.clientX - 50;
    const y = e.clientY - 50;
    activePiece.style.position = "absolute";
    activePiece.style.left = `${x}px`;
    activePiece.style.top = `${y}px`;
  }
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

      board.push(<Tile key={`${j},${i}`} image={image} number={number} />);
    }
  }
  return (
    <div
      onMouseDown={(e) => grabPiece(e)}
      onMouseMove={(e) => movePiece(e)}
      id="chessboard"
      className="bg-violet-600 w-96 h-96"
    >
      {board}
    </div>
  );
}

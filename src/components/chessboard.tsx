import { useRef, useState } from "react";
import "../css/App.css";
import "../css/Output.css";
import Tile from "./tile";
import Referee from "../referee/Referee";

const verticalsAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
const horizontalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];

interface Piece {
  image: string;
  x: number;
  y: number;
  type: PieceType;
  team: TeamType;
}

export enum PieceType {
  PAWN,
  BISHOP,
  KNIGHT,
  ROOK,
  QUEEN,
  KING,
}

export enum TeamType {
  OUR,
  OPPONENT,
}

// The chessboard and pieces positions initially

const initialBoardState: Piece[] = [];
const numberPiece = 8;

// white pieces without pawns positions
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

for (let i = 0; i < numberPiece; i++) {
  if (i === 0 && i === numberPiece - 1) {
    initialBoardState.push({
      image: whitePiece[i],
      x: i,
      y: 0,
      type: PieceType.ROOK,
      team: TeamType.OUR,
    });
  } else if (i === 1 && i === numberPiece - 2) {
    initialBoardState.push({
      image: whitePiece[i],
      x: i,
      y: 0,
      type: PieceType.KNIGHT,
      team: TeamType.OUR,
    });
  } else if (i === 2 && i === numberPiece - 3) {
    initialBoardState.push({
      image: whitePiece[i],
      x: i,
      y: 0,
      type: PieceType.BISHOP,
      team: TeamType.OUR,
    });
  } else if (i === 3 && i === numberPiece - 4) {
    initialBoardState.push({
      image: whitePiece[i],
      x: i,
      y: 0,
      type: PieceType.QUEEN,
      team: TeamType.OUR,
    });
  } else {
    initialBoardState.push({
      image: whitePiece[i],
      x: i,
      y: 0,
      type: PieceType.KING,
      team: TeamType.OUR,
    });
  }
}

// black pieces without pawns positions
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

for (let i = 0; i < numberPiece; i++) {
  if (i === 0 && i === numberPiece - 1) {
    initialBoardState.push({
      image: blackPiece[i],
      x: i,
      y: 7,
      type: PieceType.ROOK,
      team: TeamType.OUR,
    });
  } else if (i === 1 && i === numberPiece - 2) {
    initialBoardState.push({
      image: blackPiece[i],
      x: i,
      y: 7,
      type: PieceType.KNIGHT,
      team: TeamType.OUR,
    });
  } else if (i === 2 && i === numberPiece - 3) {
    initialBoardState.push({
      image: blackPiece[i],
      x: i,
      y: 7,
      type: PieceType.BISHOP,
      team: TeamType.OUR,
    });
  } else if (i === 3 && i === numberPiece - 4) {
    initialBoardState.push({
      image: blackPiece[i],
      x: i,
      y: 7,
      type: PieceType.QUEEN,
      team: TeamType.OUR,
    });
  } else {
    initialBoardState.push({
      image: blackPiece[i],
      x: i,
      y: 7,
      type: PieceType.KING,
      team: TeamType.OUR,
    });
  }
}

// white pawns positions

for (let i = 0; i < 8; i++) {
  initialBoardState.push({
    image: "B_pawn.png",
    x: i,
    y: 6,
    type: PieceType.PAWN,
    team: TeamType.OPPONENT,
  });
}

// black pawns positions

for (let i = 0; i < 8; i++) {
  initialBoardState.push({
    image: "W_pawn.png",
    x: i,
    y: 1,
    type: PieceType.PAWN,
    team: TeamType.OUR,
  });
}

// The chessboard functionality
export default function Chessboard() {
  const [pieces, setPieces] = useState<Piece[]>(initialBoardState);
  const [activePiece, setActivePiece] = useState<HTMLElement | null>(null);
  const [gridX, setGridX] = useState(0);
  const [gridY, setGridY] = useState(0);
  const referee = new Referee();

  const chessboardRef = useRef<HTMLDivElement>(null);

  // Functions for moving, grabbing and dropping pieces
  function grabPiece(e: React.MouseEvent) {
    const element = e.target as HTMLElement;
    const chessboard = chessboardRef.current;

    if (element.classList.contains("chessPiece") && chessboard) {
      const gridX = Math.floor((e.clientX - chessboard.offsetLeft) / 100);
      const gridY = Math.abs(
        Math.ceil((e.clientY - chessboard.offsetTop - 800) / 100)
      );

      setGridX(gridX);
      setGridY(gridY);

      const x = e.clientX - 50;
      const y = e.clientY - 50;
      element.style.position = "absolute";
      element.style.left = `${x}px`;
      element.style.top = `${y}px`;

      setActivePiece(element);
    }
  }

  function movePiece(e: React.MouseEvent) {
    const chessboard = chessboardRef.current;
    if (activePiece && chessboard) {
      const minX = chessboard.offsetLeft - 25;
      const minY = chessboard.offsetTop - 25;
      const maxX = chessboard.offsetLeft + chessboard.clientWidth - 75;
      const maxY = chessboard.offsetTop + chessboard.clientHeight - 75;
      const x = e.clientX - 25;
      const y = e.clientY - 25;
      activePiece.style.position = "absolute";

      // chessboard constraints/limitations,
      // pieces can not be moved outside of the chessboard
      if (x < minX) {
        activePiece.style.left = `${minX}px`;
      } else if (x > maxX) {
        activePiece.style.left = `${maxX}px`;
      } else {
        activePiece.style.left = `${x}px`;
      }

      if (y < minY) {
        activePiece.style.top = `${minY}px`;
      } else if (y > maxY) {
        activePiece.style.top = `${maxY}px`;
      } else {
        activePiece.style.top = `${y}px`;
      }
    }
  }

  function dropPiece(e: React.MouseEvent) {
    const chessboard = chessboardRef.current;
    if (activePiece && chessboard) {
      const x = Math.floor((e.clientX - chessboard.offsetLeft) / 100);
      const y = Math.abs(
        Math.ceil((e.clientY - chessboard.offsetTop - 800) / 100)
      );

      // console.log(x, y);

      setPieces((value) => {
        const pieces = value.map((p) => {
          if (p.x === gridX && p.y === gridY) {
            const validMove = referee.isValidMove(
              gridX,
              gridY,
              x,
              y,
              p.type,
              p.team
            );

            if (validMove) {
              p.x = x;
              p.y = y;
            } else {
              activePiece.style.position = "relative";
              activePiece.style.removeProperty("top");
              activePiece.style.removeProperty("left");
            }
          }
          return p;
        });
        return pieces;
      });
      setActivePiece(null);
    }
  }

  // chessboard designed

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
      onMouseUp={(e) => dropPiece(e)}
      ref={chessboardRef}
      id="chessboard"
      className="bg-violet-600 w-96 h-96"
    >
      {board}
    </div>
  );
}

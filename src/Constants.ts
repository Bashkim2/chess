/******************************CONSTANTS***********************************************/

/**
 * Constants
 */
export const verticalsAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
export const horizontalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];



/******************************ENUM & INTERFACES***********************************************/

/**
 * Enum and interfaces
 */

export interface Piece {
  image: string;
  x: number;
  y: number;
  type: PieceType;
  team: TeamType;
  enPassant?: boolean;
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

/******************************CHESSBOARD INIT***********************************************/

/**
 * The chessboard and pieces positions initially
 */

export const initialBoardState: Piece[] = [
  {
    image: "W_rock.png",
    x: 0,
    y: 7,
    type: PieceType.ROOK,
    team: TeamType.OUR,
  },
  {
    image: "B_rock.png",
    x: 0,
    y: 0,
    type: PieceType.ROOK,
    team: TeamType.OPPONENT,
  },
  {
    image: "W_rock.png",
    x: 7,
    y: 7,
    type: PieceType.ROOK,
    team: TeamType.OUR,
  },
  {
    image: "B_rock.png",
    x: 7,
    y: 0,
    type: PieceType.ROOK,
    team: TeamType.OPPONENT,
  },
  {
    image: "W_knight.png",
    x: 1,
    y: 7,
    type: PieceType.KNIGHT,
    team: TeamType.OUR,
  },
  {
    image: "B_knight.png",
    x: 1,
    y: 0,
    type: PieceType.KNIGHT,
    team: TeamType.OPPONENT,
  },
  {
    image: "W_knight.png",
    x: 6,
    y: 7,
    type: PieceType.KNIGHT,
    team: TeamType.OUR,
  },
  {
    image: "B_knight.png",
    x: 6,
    y: 0,
    type: PieceType.KNIGHT,
    team: TeamType.OPPONENT,
  },
  {
    image: "W_bishop.png",
    x: 2,
    y: 7,
    type: PieceType.BISHOP,
    team: TeamType.OUR,
  },
  {
    image: `public/B_bishop.png`,
    x: 2,
    y: 0,
    type: PieceType.BISHOP,
    team: TeamType.OPPONENT,
  },
  {
    image: `public/W_bishop.png`,
    x: 5,
    y: 7,
    type: PieceType.BISHOP,
    team: TeamType.OUR,
  },
  {
    image: `public/B_bishop.png`,
    x: 5,
    y: 0,
    type: PieceType.BISHOP,
    team: TeamType.OPPONENT,
  },
  {
    image: `public/W_queen.png`,
    x: 3,
    y: 7,
    type: PieceType.QUEEN,
    team: TeamType.OUR,
  },
  {
    image: `public/B_queen.png`,
    x: 3,
    y: 0,
    type: PieceType.QUEEN,
    team: TeamType.OPPONENT,
  }, 
  {
    image: `public/W_king.png`,
    x: 4,
    y: 7,
    type: PieceType.KING,
    team: TeamType.OUR,
  },
  {
    image: `public/B_king.png`,
    x: 4,
    y: 0,
    type: PieceType.KING,
    team: TeamType.OPPONENT,
  },
  {
    image: `public/W_pawn.png`,
    x: 0,
    y: 7,
    type: PieceType.PAWN,
    team: TeamType.OUR,
  },
  {
    image: `public/B_pawn.png`,
    x: 0,
    y: 0,
    type: PieceType.PAWN,
    team: TeamType.OPPONENT,
  },
  {
    image: `public/W_pawn.png`,
    x: 1,
    y: 7,
    type: PieceType.PAWN,
    team: TeamType.OUR,
  },
  {
    image: `public/B_pawn.png`,
    x: 1,
    y: 0,
    type: PieceType.PAWN,
    team: TeamType.OPPONENT,
  },
  {
    image: `public/W_pawn.png`,
    x: 2,
    y: 7,
    type: PieceType.PAWN,
    team: TeamType.OUR,
  },
  {
    image: `public/B_pawn.png`,
    x: 2,
    y: 0,
    type: PieceType.PAWN,
    team: TeamType.OPPONENT,
  },
  {
    image: `public/W_pawn.png`,
    x: 3,
    y: 7,
    type: PieceType.PAWN,
    team: TeamType.OUR,
  },
  {
    image: `public/B_pawn.png`,
    x: 3,
    y: 0,
    type: PieceType.PAWN,
    team: TeamType.OPPONENT,
  },
  {
    image: `public/W_pawn.png`,
    x: 4,
    y: 7,
    type: PieceType.PAWN,
    team: TeamType.OUR,
  },
  {
    image: `public/B_pawn.png`,
    x: 4,
    y: 0,
    type: PieceType.PAWN,
    team: TeamType.OPPONENT,
  },
  {
    image: `public/W_pawn.png`,
    x: 5,
    y: 7,
    type: PieceType.PAWN,
    team: TeamType.OUR,
  },
  {
    image: `public/B_pawn.png`,
    x: 5,
    y: 0,
    type: PieceType.PAWN,
    team: TeamType.OPPONENT,
  },
  {
    image: "public/W_pawn.png",
    x: 6,
    y: 7,
    type: PieceType.PAWN,
    team: TeamType.OUR,
  },
  {
    image: `public/B_pawn.png`,
    x: 6,
    y: 0,
    type: PieceType.PAWN,
    team: TeamType.OPPONENT,
  },
  {
    image: `public/W_pawn.png`,
    x: 7,
    y: 7,
    type: PieceType.PAWN,
    team: TeamType.OUR,
  },
  {
    image: `public/B_pawn.png`,
    x: 7,
    y: 0,
    type: PieceType.PAWN,
    team: TeamType.OPPONENT,
  },
];

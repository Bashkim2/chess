/**
 * Constants
 */
export const verticalsAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
export const horizontalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];

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

const initialBoardState: Piece[] = [
  {
    image: `public/W_rock.png`,
    x: 1,
    y: 7,
    type: PieceType.ROOK,
    team: TeamType.OUR,
  },
  {
    image: `public/B_rock.png`,
    x: 6,
    y: 0,
    type: PieceType.ROOK,
    team: TeamType.OPPONENT,
  },
   {
    image: `public/W_bishop.png`,
    x: 1,
    y: 7,
    type: PieceType.BISHOP,
    team: TeamType.OUR,
  },
  {
    image: `public/B_bishop.png`,
    x: 6,
    y: 0,
    type: PieceType.BISHOP,
    team: TeamType.OPPONENT,
  },
  {
    image: `public/W_knight.png`,
    x: 1,
    y: 7,
    type: PieceType.KNIGHT,
    team: TeamType.OUR,
  },
  {
    image: `public/B_knight.png`,
    x: 6,
    y: 0,
    type: PieceType.KNIGHT,
    team: TeamType.OPPONENT,
  },
];

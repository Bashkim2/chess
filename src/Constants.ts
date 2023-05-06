
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
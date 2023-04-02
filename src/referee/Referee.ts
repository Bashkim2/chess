import { PieceType, TeamType, Piece } from "../components/chessboard";

export default class Referee {
  // Function isOccupied
  tileIsOccupied(x: number, y: number, boardState: Piece[]): boolean {
    const piece = boardState.find((p) => p.x === x && p.y === y);

    if (piece) {
      return true;
    } else {
      return false;
    }
  }

  // Function move pawn
  isValidMove(
    px: number,
    py: number,
    x: number,
    y: number,
    type: PieceType,
    team: TeamType,
    boardState: Piece[]
  ) {
    // Pawns Valid Moves
    if (type === PieceType.PAWN) {
      if (team === TeamType.OUR) {
        if (py === 1) {
          if (px === x && (y - py === 1 || y - py === 2)) {
            if (!this.tileIsOccupied(x, y, boardState)) {
              return true;
            }
          }
        } else {
          if (px === x && y - py === 1) {
            return true;
          }
        }
      } else {
        if (py === 6) {
          if (px === x && (y - py === -1 || y - py === -2)) {
            if (!this.tileIsOccupied(x, y, boardState)) {
              return true;
            }
          }
        } else {
          if (px === x && y - py === -1) {
            return true;
          }
        }
      }
    }
    return false;
  }
}

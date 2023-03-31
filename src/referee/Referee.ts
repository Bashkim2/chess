import { PieceType, TeamType } from "../components/chessboard";

export default class Referee {
  isValidMove(
    px: number,
    py: number,
    x: number,
    y: number,
    type: PieceType,
    team: TeamType
  ) {
    console.log("Referee is checking moves");
    console.log(`Previous location: (${px},${py})`);
    console.log(`current location: (${x},${y})`);
    console.log(`type: ${type}`);
    console.log(`team: ${team}`);

    if (type === PieceType.PAWN && py === 1) {
      y = 2;
    }

    return true;
  }
}

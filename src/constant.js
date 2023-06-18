import { createPosition } from "./helpful/helper";

export const initGameState = {
  position: [createPosition()],
  turn: "w",
  candidateMoves: [],
};

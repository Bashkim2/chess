import React from "react";
import "../css/App.css";
import "../css/Output.css";

const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
const verticalsAxis = [1, 2, 3, 4, 5, 6, 7, 8];

export default function Chessboard() {
  // return (
  //   <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
  //     <div>
  //       <div className="text-xl font-medium text-black">ChitChat</div>
  //       <p className="text-slate-500">You have a new message!</p>
  //     </div>
  //   </div>
  // );

  return <div className="bg-lime-600 w-96 h-96">Chessboard</div>;
}

import React from "react";
import Chessboard from "./components/chessboard";
import Helloworld from "./components/helloworld";
import "./css/App.css";
import "./css/Output.css";

function App() {
  return (
    <div className="grid justify-center place-content-center">
      <Chessboard />;
    </div>
  );
}

export default App;

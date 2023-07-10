import { useEffect, useReducer, useState } from "react";
import "./css/App.css";
import Board from "./components/Board/Board";
import AppContext from "./contexts/Context";
import { reducer } from "./reducer/reducer";
import { initGameState } from "./constant";
import Control from "./components/Control/Control";
import MovesList from "./components/Control/bits/MovesList";
import TakeBack from "./components/Control/bits/TakeBack";
import io from "socket.io-client";
import ConnectionHandler from "./Connection/connectionHandler";

export const socket = io.connect("http://localhost:3001");

export default function App() {
  const [appState, dispatch] = useReducer(reducer, initGameState);
  const [show, setShow] = useState(true);

  const providerState = {
    appState,
    dispatch,
  };

  return (
    <div>
      {show ? (
        <ConnectionHandler />
      ) : (
        <AppContext.Provider value={providerState}>
          <div className="App">
            <Board />
            <Control>
              <MovesList />
              <TakeBack />
            </Control>
          </div>
        </AppContext.Provider>
      )}
    </div>
  );
}

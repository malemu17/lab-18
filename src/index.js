import React from "react";
import ReactDOM from "react-dom";
import MadLibs from "./madlib.js";

function App() {
  return (
    <div>
      <h1>Merry Christmas Mad Lib</h1>
      <h2>Fill form fields to see The Mad Lib!</h2>
      <MadLibs />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

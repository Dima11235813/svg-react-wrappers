import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CircleGrowShrink from "./components/CircleGrowShrink";
import LayeredCircleFactory from "./factories/LayeredCircleFactory";

function App() {
  return (
    <div className="App">
      <LayeredCircleFactory />
      {/* <CircleGrowShrink /> */}
    </div>
  );
}

export default App;
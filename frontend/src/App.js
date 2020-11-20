import React, { useRef, useState } from "react";
import { SketchField, Tools } from "react-sketch";

import { makePrediction } from "./api";

import logo from "./logo.svg";
import "./App.css";

const pixels = (count) => `${count}px`;
const percents = (count) => `${count}px`;

const MAIN_CONTAINER_WIDTH_PX = 200;
const MAIN_CONTAINER_HEIGHT = 100;
const MAIN_CONTAINER_STYLE = {
  width: pixels(MAIN_CONTAINER_WIDTH_PX),
  height: percents(MAIN_CONTAINER_HEIGHT),
  margin: "0 auto",
};

const SKETCH_CONTAINER_STYLE = {
  border: "1px solid black",
  width: pixels(MAIN_CONTAINER_WIDTH_PX - 2),
  height: pixels(MAIN_CONTAINER_WIDTH_PX - 2),
  backgroundColor: "white",
};

const App = () => {
  const sketchRef = useRef(null);
  const [errors, setErrors] = useState();
  const [value, setValue] = useState();
  const [prediction, setPrediction] = useState();

  const handleSubmit = () => {
    const image = sketchRef.current.toDataURL();

    setPrediction(undefined);
    setErrors(undefined);

    makePrediction(image).then(setPrediction).catch(setErrors);
  };

  const handleClear = (e) => sketchRef.current.clear();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="App" style={MAIN_CONTAINER_STYLE}>
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Draw a digit</h1>
        </header>
        <div style={SKETCH_CONTAINER_STYLE}>
          <SketchField
            ref={sketchRef}
            onChange={handleChange}
            width="100%"
            height="100%"
            tool={Tools.Pencil}
            imageFormat="jpg"
            lineColor="#111"
            lineWidth={10}
            value={value}
          />
        </div>
        {prediction && <h3>Predicted value is: {prediction}</h3>}
        <button onClick={handleClear}>Clear</button>
        <button onClick={handleSubmit}>Guess the number</button>
        {errors && <p style={{ color: "red" }}>Something went wrong</p>}
      </div>
    </div>
  );
};

export default App;

import React, { Component } from 'react';
import logo from './assets/logo.svg';
import './assets/App.css';
import { SketchField, Tools } from 'react-sketch';
import { makePrediction } from "./api";

const pixels = count => `${count}px`;
const percents = count => `${count}px`;

const MAIN_CONTAINER_WIDTH_PX = 200;
const MAIN_CONTAINER_HEIGHT = 100;
const MAIN_CONTAINER_STYLE = {
  width: pixels(MAIN_CONTAINER_WIDTH_PX),
  height: percents(MAIN_CONTAINER_HEIGHT),
  margin: '0 auto'
};

const SKETCH_CONTAINER_STYLE = {
  border: '1px solid black',
  width: pixels(MAIN_CONTAINER_WIDTH_PX - 2),
  height: pixels(MAIN_CONTAINER_WIDTH_PX - 2),
  backgroundColor: 'white'
};


class App extends Component {
  state = {
    prediction: undefined,
    errors: undefined,
  };

  handleSubmit = e => {
    const image = this.sketch.toDataURL();
    this.setState({
      prediction: undefined,
      errors: undefined,
    });
    makePrediction(image)
    .then(prediction => this.setState({ prediction }))
    .catch(errors => this.setState({ errors }))
  };

  handleClear = e => this.sketch.clear();

  render() {
    const { prediction, errors } = this.state;
    return (
      <div className="App" style={MAIN_CONTAINER_STYLE}>
        <div>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h1 className="App-title">Draw a digit</h1>
          </header>
          <div style={SKETCH_CONTAINER_STYLE}>
            <SketchField
              ref={c => this.sketch = c}
              width='100%'
              height='100%'
              tool={Tools.Pencil}
              imageFormat='jpg'
              backgroundColor='white'
              lineColor='gray'
              lineWidth={8}
            />
          </div>
          {prediction && <h3>Predicted value is: {prediction}</h3>}
          <button onClick={this.handleClear}>
            Clear
          </button>
          <button onClick={this.handleSubmit}>
            Guess the number
          </button>
          {errors && <p style={{ color: 'red' }}>Something went wrong</p>}
        </div>
      </div>
    );
  }
}

export default App;

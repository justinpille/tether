import React, { Component } from 'react';
import Pointer from './Pointer'


class App extends Component {

  state = {
    x: 0,
    y: 0,
    down: false,
  }

  setPos = (x, y) => {
    this.setState({x, y})
  }

  setDown = (down) => {
    this.setState({down})
  }

  render() {

    return (
      <div className="App">
        <Pointer
          setPos={this.setPos}
          setDown={this.setDown}
        />
        <svg>
          <line
            x1="0"
            y1="0"
            x2={this.state.x}
            y2={this.state.y}
            strokeWidth="1"
            stroke="black"
          />
        </svg>
      </div>
    );
  }
}

export default App;

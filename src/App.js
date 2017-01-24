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
        <p>
          X Position: {this.state.x}
        </p>
        <p>
          Y Position: {this.state.y}
        </p>
        <p>
          Down?: {this.state.down ? 'Yes' : 'No'}
        </p>
      </div>
    );
  }
}

export default App;

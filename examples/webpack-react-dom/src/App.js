import React, { PureComponent } from 'react';
import { Label } from './index.css';

class Counter extends PureComponent {
  state = { count: 0 };

  handleClick = () => {
    this.setState(state => ({ ...state, count: state.count + 1 }));
  };

  render() {
    return (
      <div onClick={this.handleClick}>
        {this.state.count}
      </div>
    );
  }
}

class App extends PureComponent {
  state = {};

  handleClick = () => {
    this.setState({
      color: `rgb(${ (Math.random() * 255).toFixed(0) }, ${ (Math.random() * 255).toFixed(0) }, ${ (Math.random() *
        255).toFixed(0) })`,
      fontSize: Math.random() * 100,
    });
  };

  render() {
    return (
      <div>
        <Label color={this.state.color} fontSize={this.state.fontSize} onClick={this.handleClick} highlighted>
          Click Me
        </Label>
        <Label name="The White Screen">The White Screen</Label>
        <Label>Just a label bro</Label>
        <Counter />
      </div>
    );
  }
}

export default App;

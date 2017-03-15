import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import { Label } from './index.css';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return React.createElement(Label, {
      color: this.state.color,
      fontSize: Math.random() * 100,
      onClick: () => this.setState({
        color: `rgb(${(Math.random() * 255).toFixed(0)}, ${(Math.random() * 255).toFixed(0)}, ${(Math.random() * 255).toFixed(0)})` }),
    }, 'Hello World!');
  }
}

ReactDOM.render(React.createElement(App), document.querySelector('#root'));
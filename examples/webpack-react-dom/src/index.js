import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import * as Components from './index.css';

console.log(Components);

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return React.createElement(Components.Label, {
      color: this.state.color,
      fontSize: Math.random() * 10,
      highlighted: true,
      name: 'Ryskin',
      onClick: () => this.setState({
        color: `rgb(${(Math.random() * 255).toFixed(0)}, ${(Math.random() * 255).toFixed(0)}, ${(Math.random() * 255).toFixed(0)})` }),
    }, 'Click Me!');
  }
}

ReactDOM.render(React.createElement(App), document.querySelector('#root'));

import React, { PureComponent } from 'react';
import { Label } from './index.css';

class Counter extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  render() {
    return React.createElement(
      'div',
      {
        onClick: () => this.setState(state => Object.assign({}, state, { count: state.count + 1 })),
      },
      this.state.count
    );
  }
}

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return React.createElement('div', { role: 'container' }, [
      React.createElement(
        Label,
        {
          key: 'ryskin',
          color: this.state.color,
          fontSize: Math.random() * 100,
          highlighted: true,
          name: 'Ryskin',
          onClick: () =>
            this.setState({
              color: `rgb(${ (Math.random() * 255).toFixed(0) }, ${ (Math.random() * 255).toFixed(0) }, ${ (Math.random() * 255).toFixed(0) })`,
            }),
        },
        'Ryskinder, please click me!'
      ),
      React.createElement(
        Label,
        {
          key: 'theWhiteScreen',
          name: 'The White Screen',
        },
        'The White Screen'
      ),
      React.createElement(
        Label,
        {
          key: 'justlabel',
        },
        'Just a label bro'
      ),
      React.createElement(Counter),
    ]);
  }
}

export default App;

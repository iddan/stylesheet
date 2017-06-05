import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import { Label } from './index.css';

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
      React.createElement(Label, {}, 'Just a label bro'),
    ]);
  }
}

ReactDOM.render(React.createElement(App), document.querySelector('#root'));

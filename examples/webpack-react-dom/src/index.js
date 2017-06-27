import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Stylesheet from 'stylesheet/react-dom/hot';

if (module.hot) {
  module.hot.accept('./App', Stylesheet.handleAccept);
}

ReactDOM.render(React.createElement(App), document.querySelector('#root'));

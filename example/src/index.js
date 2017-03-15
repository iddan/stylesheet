import React from 'react';
import ReactDOM from 'react-dom';
import { Label } from './index.css';

ReactDOM.render(React.createElement(Label, { 'color': 'green', 'font-size': 18 }, 'Hello World!'), document.querySelector('#root'));
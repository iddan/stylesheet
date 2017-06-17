import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const initialTodos = JSON.parse(localStorage.getItem('todos'));

const storeTodos = todos => localStorage.setItem('todos', JSON.stringify(todos));

ReactDOM.render(
  <App todos={initialTodos} onTodosChange={storeTodos} />,
  document.querySelector('#root')
);

import React, { Component } from 'react';
import { Container, NewTodo, Main, ToggleAll, TodoList } from './App.css';
import TodoItem from './TodoItem';

class TodoApp extends Component {
  state = {
    todos: [
      {
        id: '#1',
        title: 'Say Hello',
        completed: false,
      },
    ],
  };

  render() {
    const { todos } = this.state;
    return (
      <Container>
        <header>
          <h1>todos</h1>
          <NewTodo placeholder="What needs to be done?" />
        </header>
        <Main>
          <ToggleAll type="checkbox" checked />
          <TodoList>{todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}</TodoList>
        </Main>
      </Container>
    );
  }
}

export default TodoApp;

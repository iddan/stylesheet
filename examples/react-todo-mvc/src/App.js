import React, { Component } from 'react';
import {
  Container,
  NewTodo,
  Main,
  ToggleAll,
  TodoList,
  TodoItem as StyledTodoItem,
  TodoView,
  TodoEdit,
  Toggle,
  Destroy,
} from './App.css';

const TodoItem = ({ editing, onCancel, onDestroy, onEdit, onSave, onToggle, todo }) => (
  <StyledTodoItem editing={editing}>
    <TodoView>
      <Toggle type="checkbox" onChange={onToggle} value={todo.completed} />
      <label>{todo.title}</label>
      <Destroy onClick={onDestroy} />
    </TodoView>
  </StyledTodoItem>
);

class TodoApp extends Component {
  state = {
    todos: [
      {
        title: 'Say Hello',
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

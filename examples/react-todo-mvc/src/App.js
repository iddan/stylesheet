import React, { PureComponent } from 'react';
import { Container, Main, ToggleAll, TodoList } from './App.css';
import NewTodo from './NewTodo';
import TodoItem from './TodoItem';
import Footer from './Footer';

const filterTodos = (filter, todos) => {
  switch (filter) {
    case 'active': {
      return todos.filter(todo => !todo.completed);
    }
    case 'completed': {
      return todos.filter(todo => todo.completed);
    }
    default: {
      return todos;
    }
  }
};

class TodoApp extends PureComponent {
  state = {
    filter: location.hash.replace('#/', '') || 'all',
    todos: [],
  };

  addNewTodo = ({ title }) => {
    this.setState(state => ({
      ...state,
      todos: [
        ...state.todos,
        {
          id: Math.random().toString(32),
          completed: false,
          title,
        },
      ],
    }));
  };

  setFilter = filter => {
    this.setState({ filter });
  };

  handleToggleAllChange = e => {
    const { checked } = e.target;
    this.setState(state => ({
      ...state,
      todos: state.todos.map(todo => ({
        ...todo,
        completed: checked,
      })),
    }));
  };

  updateTodo = todo => {
    this.setState(state => {
      const { todos } = state;
      const todoIndex = todos.findIndex(({ id }) => todo.id === id);
      const newTodos = [...todos];
      newTodos[todoIndex] = {
        ...todos[todoIndex],
        ...todo,
      };
      return {
        ...state,
        todos: newTodos,
      };
    });
  };

  destroyTodo = todo => {
    this.setState(state => {
      const { todos } = this.state;
      const todoIndex = todos.findIndex(({ id }) => todo.id === id);
      return {
        ...state,
        todos: [...todos.slice(0, todoIndex), ...todos.slice(todoIndex + 1, todos.length)],
      };
    });
  };

  render() {
    const { todos, filter } = this.state;
    const incomplete = todos.reduce((sum, todo) => sum + Number(!todo.completed), 0);
    return (
      <Container>
        <header>
          <h1>todos</h1>
          <NewTodo add={this.addNewTodo} />
        </header>
        <Main>
          <ToggleAll
            type="checkbox"
            checked={todos.length && todos.every(todo => todo.completed)}
            onChange={this.handleToggleAllChange}
          />
          <TodoList>
            {filterTodos(filter, todos).map(todo => (
              <TodoItem
                key={todo.id}
                id={todo.id}
                title={todo.title}
                completed={todo.completed}
                onChange={this.updateTodo}
                onDestroy={this.destroyTodo}
              />
            ))}
          </TodoList>
        </Main>
        {Boolean(todos.length) &&
          <Footer onFilterSelect={this.setFilter} filter={filter} incomplete={incomplete} />}
      </Container>
    );
  }
}

export default TodoApp;

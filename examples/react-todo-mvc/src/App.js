import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
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
  static propTypes = {
    todos: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
      })
    ),
    onTodosChange: PropTypes.func.isRequired,
  };

  state = {
    filter: location.hash.replace('#/', '') || 'all',
    todos: this.props.todos || [],
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos !== this.state.todos) {
      this.props.onTodosChange(this.state.todos);
    }
  }

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

  handleClearCompleted = () => {
    this.setState(state => ({
      todos: state.todos.filter(todo => !todo.completed),
    }));
  };

  render() {
    const { todos, filter } = this.state;
    const complete = todos.reduce((sum, todo) => sum + Number(todo.completed), 0);
    const shownTodos = filterTodos(filter, todos);
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
            {shownTodos.map(todo => (
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
          <Footer
            onFilterSelect={this.setFilter}
            onClearCompleted={this.handleClearCompleted}
            filter={filter}
            complete={complete}
            incomplete={todos.length - complete}
          />}
      </Container>
    );
  }
}

export default TodoApp;

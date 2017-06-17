import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TodoItem as StyledTodoItem, TodoView, TodoEdit, Toggle, Destroy } from './TodoItem.css';

class TodoItem extends PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    onDestroy: PropTypes.func.isRequired,
  };

  state = {
    editing: false,
  };

  setInput = input => {
    this.input = input;
  };

  focusInput = () => {
    this.input.focus();
  };

  startEdit = () => {
    this.setState({ editing: true }, this.focusInput);
  };

  endEdit = () => {
    this.setState({ editing: false });
  };

  changeTitle = e => {
    const { onChange, id } = this.props;
    onChange({ id, title: e.target.value });
  };

  changeComplete = e => {
    const { onChange, id } = this.props;
    onChange({ id, completed: e.target.checked });
  };

  destroy = () => {
    const { onDestroy, id } = this.props;
    onDestroy({ id });
  };

  render() {
    const { title, completed } = this.props;
    const { editing } = this.state;
    return (
      <StyledTodoItem editing={editing} completed={completed}>
        <TodoView onDoubleClick={this.startEdit}>
          <Toggle type="checkbox" onChange={this.changeComplete} checked={completed} />
          <label>{title}</label>
          <Destroy onClick={this.destroy} />
        </TodoView>
        <TodoEdit
          innerRef={this.setInput}
          value={title}
          onChange={this.changeTitle}
          onBlur={this.endEdit}
        />
      </StyledTodoItem>
    );
  }
}

export default TodoItem;

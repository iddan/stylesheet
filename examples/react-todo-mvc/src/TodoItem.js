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
    editedTitle: null,
    editing: false,
  };

  edit = () => {
    this.setState({ editing: true, editedTitle: this.props.title });
  };

  cancelEdit = () => {
    this.setState({ editing: false, editedTitle: null });
  };

  handleChange = e => {
    this.setState({ editedTitle: e.target.value });
  };

  save = () => {
    const { onChange, id } = this.props;
    const { editedTitle } = this.state;
    onChange({ id, title: editedTitle });
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
    const { editing, editedTitle } = this.state;
    return (
      <StyledTodoItem editing={editing}>
        <TodoView onDoubleClick={this.edit}>
          <Toggle type="checkbox" onChange={this.changeComplete} value={completed} />
          <label>{title}</label>
          <Destroy onClick={this.destroy} />
        </TodoView>
        <TodoEdit value={editedTitle || title} onBlur={this.cancelEdit} />
      </StyledTodoItem>
    );
  }
}

export default TodoItem;

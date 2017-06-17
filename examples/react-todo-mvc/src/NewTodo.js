import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { NewTodo as StyledNewTodo } from './NewTodo.css';

class NewTodo extends PureComponent {
  static propTypes = {
    add: PropTypes.func.isRequired,
  };

  state = {
    title: '',
  };

  handleKeyDown = e => {
    switch (e.keyCode) {
      case 13: {
        const { title } = this.state;
        const trimmedTitle = title.trim();
        if (trimmedTitle) {
          this.setState({ title: '' });
          this.props.add({ title: trimmedTitle });
        }
      }
    }
  };

  handleChange = e => {
    this.setState({ title: e.target.value });
  };

  render() {
    const { title } = this.state;
    return (
      <StyledNewTodo
        onChange={this.handleChange}
        value={title}
        onKeyDown={this.handleKeyDown}
        placeholder="What needs to be done?"
      />
    );
  }
}

export default NewTodo;

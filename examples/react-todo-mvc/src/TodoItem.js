import { TodoItem as StyledTodoItem, TodoView, TodoEdit, Toggle, Destroy } from './TodoItem.css';

const TodoItem = ({ editing, onCancel, onDestroy, onEdit, onSave, onToggle, todo }) => (
  <StyledTodoItem editing={editing}>
    <TodoView>
      <Toggle type="checkbox" onChange={onToggle} value={todo.completed} />
      <label>{todo.title}</label>
      <Destroy onClick={onDestroy} />
    </TodoView>
    <TodoEdit value={todo.title} />
  </StyledTodoItem>
);

export default TodoItem;

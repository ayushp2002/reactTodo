import { Todo } from "./Todo";

export function TodoList(props) {
  var todos = [];
  props.tasks.forEach(task => {
    todos.push(
      <Todo
        {...task}
        uuid={task.key}
        completeTask={props.completeTask}
        deleteTask={props.deleteTask}
        editTask={props.editTask}
      />);
  });
  return (
    <ul className="todo-list">
      {todos}
    </ul>
  );
}

export default TodoList;
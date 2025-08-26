export function Header(props) {
    const { todos } = props;
    const todosLength = todos.length;

    const isTasksPlural = todosLength !== 1;
    const taskOrTasks = isTasksPlural ? 'tasks' : 'task';

  return (
    <header className="header">
      <h1>You have a {todosLength} open {taskOrTasks}</h1>
    </header>
  );
}
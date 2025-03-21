 function Task({ task, deleteTask, completedTask }) {
    return (
      <li style={{ textDecoration: task.completed ? "line-through" : "none" }}>
        {task.text}
        <button onClick={() => completedTask(task.id)}>✔</button>
        <button onClick={() => deleteTask(task.id)}>❌</button>
      </li>
    );
  }

  export default Task; 
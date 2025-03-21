import { useState } from "react";

function AddTaskForm({ addTask }) {
  const [taskText, setTaskText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(taskText);
    setTaskText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Añadir nueva tarea..."
      />
      <button type="submit">Agregar</button>
    </form>
  );
}
export default AddTaskForm; 
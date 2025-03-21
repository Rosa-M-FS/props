import './App.css'
import { useState } from 'react';
import Task from'./Task';
import AddTaskForm from './AddTaskForm';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Hacer la compra', completed: false },
    { id: 2, text: 'Llamar al 32médico', completed: true },
    { id: 3, text: 'Hacer ejercicio', completed: false }
  ]);
  const addTask = (inputTask) => {
    if(!inputTask.trim()){
      console.log("Escribe algo antes de agregar la tarea");
      return;
    }
    const newTask ={
      id:tasks.length+1,
      text:inputTask,
      completedTask:false
    }
    setTasks([...tasks, newTask]);  
  }

    const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const completedTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <>
      <h1>Lista de Tareas</h1>
      <AddTaskForm addTask={addTask} />
      <ul>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            completedTask={completedTask}
          />
        ))}
      </ul>
    </>
  );
};

export default App;

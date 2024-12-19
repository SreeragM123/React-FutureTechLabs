import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]); // Store tasks
  const [taskDescription, setTaskDescription] = useState(''); // Task input state
  const [filter, setFilter] = useState('all'); // Filter tasks: 'all', 'completed', 'pending'

  const addTask = () => {
    if (taskDescription.trim()) {
      const newTask = {
        id: Date.now(), 
        description: taskDescription,
        completed: false
      };
      setTasks([...tasks, newTask]);
      setTaskDescription(''); 
    }
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(tasks.map( task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const editTask = (taskId, newDescription) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, description: newDescription } : task
    ));
  };

  const filterTasks = () => {
    if (filter === 'completed') {
      return tasks.filter(task => task.completed);
    } else if (filter === 'pending') {
      return tasks.filter(task => !task.completed);
    }
    return tasks;
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <div className="task-input">
        <input 
          type="text" 
          value={taskDescription} 
          onChange={(e) => setTaskDescription(e.target.value)} 
          placeholder="Add a new task" 
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      <div className="filters">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
        <button onClick={() => setFilter('pending')}>Pending</button>
      </div>

      <div className="task-list">
        {filterTasks().map((task) => (
          <div key={task.id} className="task">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(task.id)}
            />
            <span 
              style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.description}
            </span>
            <button onClick={() => editTask(task.id, prompt("Edit task:", task.description))}>Edit</button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

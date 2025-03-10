/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/


import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

function App() {
    const [tasks, setTasks] = useState([]);
    const [editingTask, setEditingTask] = useState(null);

    useEffect(() => {
        // Load tasks from localStorage
        const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        setTasks(storedTasks);
    }, []);

    useEffect(() => {
        // Save tasks to localStorage whenever tasks change
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (task) => {
        setTasks([...tasks, task]);
    };

    const updateTask = (updatedTask) => {
        const updatedTasks = tasks.map((task) =>
            task.id === updatedTask.id ? updatedTask : task
        );
        setTasks(updatedTasks);
    };

    const deleteTask = (id) => {
        if (window.confirm('Are you sure you want to delete this task?')) {
            const newTasks = tasks.filter((task) => task.id !== id);
            setTasks(newTasks);
        }
    };

    const completeTask = (id) => {
        const updatedTasks = tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    };

    return (
        <div className="App">
            <h1>To-Do List</h1>
            <TaskForm
                addTask={addTask}
                updateTask={updateTask}
                editingTask={editingTask}
                setEditingTask={setEditingTask}
            />
            <TaskList
                tasks={tasks}
                deleteTask={deleteTask}
                completeTask={completeTask}
                setEditingTask={setEditingTask}
            />
        </div>
    );
}

export default App;



useEffect(() => {
  // Load tasks from localStorage
  const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  setTasks(storedTasks);
}, []);

useEffect(() => {
  // Save tasks to localStorage whenever tasks change
  localStorage.setItem('tasks', JSON.stringify(tasks));
}, [tasks]);

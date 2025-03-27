import React from 'react';

const Task = ({ task, updateTask, deleteTask }) => {
  return (
    <div>
      <input type="checkbox" checked={task.isDone} onChange={() => updateTask({ ...task, isDone: !task.isDone })} />
      <span style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>{task.description}</span>
      <button onClick={() => deleteTask(task.id)}>Supprimer</button>
      <button onClick={() => updateTask(task)}>Modifier</button>
    </div>
  );
};

export default Task;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const AddTask = () => {
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const addTask = () => {
    const newTask = {
      id: Math.random(),
      description,
      isDone: false,
    };
    dispatch({ type: 'ADD_TASK', task: newTask });
    setDescription('');
  };

  return (
    <div>
      <input type="text" value={description} onChange={e => setDescription(e.target.value)} />
      <button onClick={addTask}>Ajouter</button>
    </div>
  );
};

export default AddTask;

import React, { useState, useEffect } from 'react';

function TaskForm({ addTask, updateTask, editingTask, setEditingTask }) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        if (editingTask) {
            setName(editingTask.name);
            setDescription(editingTask.description);
        } else {
            setName('');
            setDescription('');
        }
    }, [editingTask]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !description) {
            setError('Please fill in both task name and description.');
            return;
        }
        setError('');

        if (editingTask) {
            updateTask({ ...editingTask, name, description });
            setEditingTask(null);
        } else {
            addTask({
                id: Date.now(),
                name,
                description,
                completed: false,
            });
        }

        setName('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
            {error && <div className="error">{error}</div>}
            <input
                type="text"
                placeholder="Task Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit">{editingTask ? 'Update Task' : 'Add Task'}</button>
            {editingTask && (
                <button type="button" onClick={() => setEditingTask(null)}>
                    Cancel Edit
                </button>
            )}
        </form>
    );
}

export default TaskForm;

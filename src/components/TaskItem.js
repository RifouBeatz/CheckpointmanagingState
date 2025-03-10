import React from 'react';

function TaskItem({ task, deleteTask, completeTask, setEditingTask }) {
    return (
        <li>
            <span className={task.completed ? 'completed' : ''}>{task.name}</span>
            <div>
                <button onClick={() => setEditingTask(task)}>Edit</button>
                <button onClick={() => deleteTask(task.id)}>Delete</button>
                <button onClick={() => completeTask(task.id)}>
                    {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
                </button>
            </div>
        </li>
    );
}

export default TaskItem;

import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, deleteTask, completeTask, setEditingTask }) {
    return (
        <ul>
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    deleteTask={deleteTask}
                    completeTask={completeTask}
                    setEditingTask={setEditingTask}
                />
            ))}
        </ul>
    );
}

export default TaskList;

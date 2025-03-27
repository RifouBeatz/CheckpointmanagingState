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


import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

const ListTask = () => {
  const tasks = useSelector(state => state.tasks.tasks);

  return (
    <div>
      {tasks.map(task => (
        <Task key={task.id} task={task} updateTask={() => console.log('Update task')} deleteTask={() => console.log('Delete task')} />
      ))}
    </div>
  );
};

export default ListTask;


import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Task from './Task';

const ListTask = () => {
  const tasks = useSelector(state => state.tasks.tasks);
  const dispatch = useDispatch();

  const filterTasks = (filter) => {
    dispatch({ type: 'FILTER_TASKS', filter });
  };

  return (
    <div>
      <button onClick={() => filterTasks(true)}>Fait</button>
      <button onClick={() => filterTasks(false)}>Pas Fait</button>
      {tasks.map(task => (
        <Task key={task.id} task={task} updateTask={() => console.log('Update task')} deleteTask={() => console.log('Delete task')} />
      ))}
    </div>
  );
};

export default ListTask;

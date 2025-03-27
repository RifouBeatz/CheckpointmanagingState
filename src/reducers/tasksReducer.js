const initialState = {
    tasks: [],
  };
  
  const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return { ...state, tasks: [...state.tasks, action.task] };
      case 'FILTER_TASKS':
        return { ...state, tasks: state.tasks.filter(task => task.isDone === action.filter) };
      case 'UPDATE_TASK':
        return {
          ...state,
          tasks: state.tasks.map(task => task.id === action.task.id ? action.task : task),
        };
      default:
        return state;
    }
  };
  
  export default tasksReducer;
  
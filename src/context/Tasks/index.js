import React, {
  useState,
  createContext,
  useContext,
  useEffect,
  useCallback,
} from 'react';

import initialData from '~/utils/initialData';

const TasksContext = createContext();

const useTasks = () => {
  const context = useContext(TasksContext);

  if (!context) {
    throw new Error('UseTasks must be used within a TasksProvider');
  }

  return context;
};

const TasksProvider = ({ children }) => {
  const [data, setData] = useState(initialData);
  const [lastTaskIndex, setLastTaskIndex] = useState(initialData.lastTaskIndex);

  const addTask = ({ type, title, content, date, columnId }) => {
    const start = data.columns[columnId];
    const startTaskIds = Array.from(start.taskIds);
    const newTaskIds = [...startTaskIds, `task-${lastTaskIndex + 1}`];
    const newColumn = {
      ...start,
      taskIds: newTaskIds,
    };
    const newTask = {
      id: `task-${lastTaskIndex + 1}`,
      type,
      title,
      content,
      date,
    };

    setData({
      ...data,
      tasks: { ...data.tasks, [`task-${lastTaskIndex + 1}`]: newTask },
      columns: { ...data.columns, [newColumn.id]: newColumn },
      lastTaskIndex: lastTaskIndex + 1,
    });
  };

  const removeTask = ({ taskId, columnId }) => {
    const newTasks = {};

    for (let key in data.tasks) {
      if (key !== taskId) newTasks[key] = data.tasks[key];
    }

    const start = data.columns[columnId];
    const newTaskIds = start.taskIds.filter((item) => item !== taskId);
    const newColumn = {
      ...start,
      taskIds: newTaskIds,
    };

    setData({
      ...data,
      tasks: { ...newTasks },
      columns: { ...data.columns, [newColumn.id]: newColumn },
    });
  };

  const updateTasksData = useCallback((data) => {
    setData(data);
  }, []);

  useEffect(() => {
    setLastTaskIndex(data.lastTaskIndex);
  }, [data]);

  return (
    <TasksContext.Provider
      value={{ addTask, data, updateTasksData, removeTask }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export { TasksProvider, useTasks };

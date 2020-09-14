import React, { useState, useEffect, memo } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { Container } from './styles';

import { useTasks } from '~/context/Tasks';

import Column from './components/Column';

const Board = () => {
  const { data: taskData, updateTasksData } = useTasks();
  const [data, setData] = useState(taskData);

  const handleDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (
      destination.index === source.index &&
      destination.droppableId === source.droppableId
    ) {
      return;
    }

    const start = data.columns[source.droppableId];
    const finish = data.columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      setData({
        ...data,
        columns: { ...data.columns, [newColumn.id]: newColumn },
      });
      return;
    }

    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    setData({
      ...data,
      columns: {
        ...data.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    });
  };

  useEffect(() => {
    setData(taskData);
  }, [taskData]);

  useEffect(() => {
    updateTasksData(data);
  }, [data, updateTasksData]);

  return (
    <Container>
      <DragDropContext onDragEnd={handleDragEnd}>
        {data &&
          data.columnOrder.map((item) => {
            const column = data.columns[item];
            const tasks = column.taskIds.map((task) => data.tasks[task]);

            return <Column key={column.id} column={column} tasks={tasks} />;
          })}
      </DragDropContext>
    </Container>
  );
};

export default memo(Board);

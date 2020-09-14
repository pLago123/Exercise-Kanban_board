import React, { memo } from 'react';
import { Droppable } from 'react-beautiful-dnd';

import { Container, ColumnBody, AddTaskButton, TaskList } from './styles';

import { useModal } from '~/context/Modal';
import Task from '../Task';
import TaskForm from './TaskForm';

const Column = ({ column, tasks }) => {
  const { openModal, setModalData } = useModal();

  const handleCreateTask = () => {
    setModalData(<TaskForm id={column.id} />);
    openModal();
  };

  return (
    <Container>
      <h3>{column.title}</h3>
      <ColumnBody>
        <Droppable droppableId={column.id}>
          {(provided) => (
            <TaskList ref={provided.innerRef} {...provided.droppableProps}>
              {tasks.map((item, index) => (
                <Task
                  key={item.id}
                  columnId={column.id}
                  task={item}
                  index={index}
                />
              ))}
              {provided.placeholder}
            </TaskList>
          )}
        </Droppable>
        <AddTaskButton onClick={handleCreateTask}>
          <span>+</span>
          Add {tasks.length ? 'another' : 'a'} task
        </AddTaskButton>
      </ColumnBody>
    </Container>
  );
};

export default memo(Column);

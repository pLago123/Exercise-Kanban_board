import React, { memo, useCallback } from 'react';
import { Draggable } from 'react-beautiful-dnd';

import { useModal } from '~/context/Modal';

import { Container, Title } from './styles';
import badgeIcons from '~/components/CardBadges';

import TaskModal from './TaskModal';

const Task = ({ task, index, columnId }) => {
  const { openModal, setModalData } = useModal();

  const handleHighlightTask = useCallback(() => {
    openModal();
    setModalData(
      <TaskModal
        taskIcon={badgeIcons[task.type]}
        task={task}
        columnId={columnId}
      />
    );
  }, [openModal, setModalData, task, columnId]);

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <>
          <Container
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            onClick={handleHighlightTask}
            isDragging={snapshot.isDragging}
          >
            <Title>
              {badgeIcons[task.type]}
              {task.type}
            </Title>
            {task.title}
          </Container>
        </>
      )}
    </Draggable>
  );
};

export default memo(Task);

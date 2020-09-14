import React, { memo, useCallback } from 'react';
import { CgClose } from 'react-icons/cg';

import { useModal } from '~/context/Modal';
import { useTasks } from '~/context/Tasks';

import {
  ModalContainer,
  ModalHeader,
  ModalTag,
  ModalBody,
  ModalDate,
  DateTagWrapper,
  DateTagDivider,
  TaskTitle,
  TaskDescription,
  Divider,
  DeleteButton,
} from './styles';

const TaskModal = ({ task, taskIcon, columnId }) => {
  const { removeTask } = useTasks();
  const { hideModal } = useModal();

  const handleRemoveTasks = useCallback(() => {
    removeTask({ taskId: task.id, columnId });
    hideModal();
  }, [task.id, columnId, removeTask, hideModal]);

  return (
    <ModalContainer>
      <ModalHeader>
        <DateTagWrapper>
          <ModalDate>{task.date}</ModalDate>
          <DateTagDivider>{'/'}</DateTagDivider>
          <ModalTag>
            {taskIcon}
            {task.type}
          </ModalTag>
        </DateTagWrapper>
        <button onClick={() => hideModal()}>
          <CgClose size={20} />
        </button>
      </ModalHeader>
      <ModalBody>
        <TaskTitle>{task.title}</TaskTitle>
        <TaskDescription>
          <h3>Description</h3>
          <p>{task.content}</p>
        </TaskDescription>
      </ModalBody>
      <Divider />
      <DeleteButton onClick={handleRemoveTasks}>Delete Task</DeleteButton>
    </ModalContainer>
  );
};

export default memo(TaskModal);

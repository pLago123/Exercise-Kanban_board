import React from 'react';

import { ModalProvider } from './Modal';
import { TasksProvider } from './Tasks';

const AppProvider = ({ children }) => {
  return (
    <TasksProvider>
      <ModalProvider>{children}</ModalProvider>
    </TasksProvider>
  );
};

export default AppProvider;

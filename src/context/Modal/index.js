import React, {
  useState,
  createContext,
  useContext,
  useCallback,
  useRef,
} from 'react';

import { Container } from './styles';

const ModalContext = createContext();

const useModal = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('UseModal must be used within a ModalProvider');
  }

  return context;
};

const ModalProvider = ({ children }) => {
  const backDropRef = useRef(null);
  const [modalData, setModalData] = useState(null);
  const [display, setDisplay] = useState(false);

  const handleClickBackDrop = useCallback((e) => {
    if (backDropRef.current && e.target === backDropRef.current) {
      setDisplay(false);
      setModalData(null);
    }
  }, []);

  const openModal = useCallback(() => {
    setDisplay(true);
  }, []);

  const hideModal = useCallback(() => {
    setDisplay(false);
    setModalData(null);
  }, []);

  return (
    <ModalContext.Provider value={{ setModalData, hideModal, openModal }}>
      {children}
      {display && (
        <Container ref={backDropRef} onClick={handleClickBackDrop}>
          {modalData}
        </Container>
      )}
    </ModalContext.Provider>
  );
};

export { ModalProvider, useModal };

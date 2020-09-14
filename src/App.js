import React from 'react';

import AppProvider from './context';

import GlobalStyle, {
  Row,
  Col,
  BlueGradient,
  PinkGradient,
} from './styles/global';
import SideBar from './components/SideBar';
import Header from './components/Header';
import Board from './pages/Board';

const App = () => {
  return (
    <AppProvider>
      <Row>
        <SideBar />
        <Col>
          <BlueGradient>
            <PinkGradient>
              <Header />
              <Board />
            </PinkGradient>
          </BlueGradient>
        </Col>
      </Row>
      <GlobalStyle />
    </AppProvider>
  );
};

export default App;

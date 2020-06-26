import React from 'react';
import './App.css';
import { ActionButtons } from './components/ActionButtons';
import { Board } from './components/Board';
import { TestButtons } from './components/TestButtons';
import styled from 'styled-components';

function App() {
  return (
    <StyledApp>
      <h1>
        PEAT Validation Tool
      </h1>
      <ActionButtons></ActionButtons>
      <Board></Board>
      <TestButtons></TestButtons>
    </StyledApp>
  );
}

export default App;

const StyledApp = styled.div`
padding: 100px;
text-align: center;
`
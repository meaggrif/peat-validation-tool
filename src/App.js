import React from "react";
import "./App.css";
import { Board } from "./components/Board";
import styled from "styled-components";

function App() {
  return (
    <StyledApp>
      <h1>PEAT Validation Tool</h1>
      <Board></Board>
    </StyledApp>
  );
}

export default App;

const StyledApp = styled.div`
  padding: 25px;
  text-align: center;
  h1 {
    margin: 10px;
  }
`;

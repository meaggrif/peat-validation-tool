import React from "react";
import styled from "styled-components";
import { BoxConfig } from "./BoxConfig";

export const ControlPanel = ({ boxes }) => {
  return (
    <StyledControlPanel>
      {boxes.map((box) => {
        return <BoxConfig box={box}></BoxConfig>;
      })}
    </StyledControlPanel>
  );
};

const StyledControlPanel = styled.div`
  background: white;
`;

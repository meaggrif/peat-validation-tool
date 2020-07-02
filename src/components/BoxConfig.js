import React from "react";
import styled from "styled-components";
import { ColorPicker } from "./ColorPicker";

export const BoxConfig = ({ box, updateBox }) => {
  return (
    <StyledBoxConfig>
      <p>{box.name}</p>
      <div>
        <div className="config-grid">
          <p>Color 1:</p>
          <ColorPicker
            box={box}
            updateBox={updateBox}
            primary={true}
          ></ColorPicker>
          <input></input>s
        </div>
        <div className="config-grid">
          <p>Color 2:</p>
          <ColorPicker
            box={box}
            updateBox={updateBox}
            primary={false}
          ></ColorPicker>
          <input></input>s
        </div>
      </div>
    </StyledBoxConfig>
  );
};

const StyledBoxConfig = styled.div`
  p {
    white-space: nowrap;
  }
  .config-grid {
    display: grid;
    grid-auto-flow: column;
    grid-gap: 10px;
  }
`;

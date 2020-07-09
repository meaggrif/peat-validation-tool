import React, { useState } from "react";
import styled from "styled-components";
import { ColorPicker } from "./ColorPicker";

export const BoxConfig = ({ box, updateBox }) => {
  const updateBoxDuration = (e, boxType) => {
    if (boxType === "PRIMARY") {
      updateBox({ ...box, primaryDuration: e.target.value });
      return;
    }

    updateBox({ ...box, secondaryDuration: e.target.value });
  };

  const updateBoxSize = (e, boxType) => {
    if (boxType === "HEIGHT") {
      updateBox({ ...box, height: e.target.value });
      return;
    }

    updateBox({ ...box, width: e.target.value });
  };

  const updateBoxVisibility = () => {
    updateBox({ ...box, visible: !box.visible });
  };

  const updateBoxCoord = (e, boxType) => {
    if (boxType === "X") {
      updateBox({ ...box, x: e.target.value });
      return;
    }
    updateBox({ ...box, y: e.target.value });
  };

  return (
    <StyledBoxConfig>
      <div>
        <div className="config-grid">
          <StyledLabel>
            <input
              type="checkbox"
              checked={box.visible}
              onChange={() => updateBoxVisibility()}
            ></input>
            {box.name}
          </StyledLabel>
        </div>
        <div className="config-grid">
          <label>C1:</label>
          <ColorPicker
            box={box}
            updateBox={updateBox}
            primary={true}
          ></ColorPicker>
          <label>C2:</label>
          <ColorPicker
            box={box}
            updateBox={updateBox}
            primary={false}
          ></ColorPicker>
        </div>
        <div className="config-grid">
          <label>Dur 1:</label>
          <StyledInput
            type="number"
            value={box.primaryDuration}
            onChange={(e) => updateBoxDuration(e, "PRIMARY")}
          ></StyledInput>
          ms
          <label>Dur 2:</label>
          <StyledInput
            type="number"
            value={box.secondaryDuration}
            onChange={(e) => updateBoxDuration(e, "SECONDARY")}
          ></StyledInput>
          ms
        </div>
        <div className="config-grid">
          <label>Height:</label>
          <StyledInput
            type="number"
            max={250}
            value={box.height}
            onChange={(e) => updateBoxSize(e, "HEIGHT")}
          ></StyledInput>
          px
          <label>Width:</label>
          <StyledInput
            type="number"
            max={300}
            value={box.width}
            onChange={(e) => updateBoxSize(e, "WIDTH")}
          ></StyledInput>
          px
        </div>
        <div className="config-grid">
          <label>X:</label>
          <StyledInput
            type="number"
            value={box.x}
            onChange={(e) => updateBoxCoord(e, "X")}
          ></StyledInput>
          <label>Y:</label>
          <StyledInput
            type="number"
            value={box.y}
            onChange={(e) => updateBoxCoord(e, "Y")}
          ></StyledInput>
        </div>
      </div>
    </StyledBoxConfig>
  );
};

const StyledBoxConfig = styled.div`
  label {
    white-space: nowrap;
  }
  .config-grid {
    display: grid;
    grid-auto-flow: column;
    grid-gap: 10px;
  }
  border: 1px solid black;
`;

const StyledInput = styled.input`
  width: 50px;
  margin: 2px;
`;

const StyledLabel = styled.label`
  input {
    margin-right: 10px;
  }
`;

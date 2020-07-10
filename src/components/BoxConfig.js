import React, { useState } from "react";
import styled from "styled-components";
import { ColorPicker } from "./ColorPicker";

export const BoxConfig = ({ box, updateBox, background }) => {
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
    <StyledBoxConfig visible={box.visible}>
      <div class="header">
        {background ? (
          <b>Background</b>
        ) : (
          <StyledLabel>
            <input
              type="checkbox"
              checked={box.visible}
              onChange={() => updateBoxVisibility()}
            ></input>
            <b> {box.name}</b>
          </StyledLabel>
        )}
      </div>

      {/* Left Column */}
      <div class="input-grid">
        <div>
          <div class="input-row">
            <label>Color 1:</label>
            <ColorPicker
              box={box}
              updateBox={updateBox}
              primary={true}
            ></ColorPicker>
          </div>
          <div class="input-row">
            <label>Dur 1:</label>
            <StyledInput
              type="number"
              value={box.primaryDuration}
              onChange={(e) => updateBoxDuration(e, "PRIMARY")}
            ></StyledInput>
          </div>
          <div class="input-row">
            {background ? null : (
              <React.Fragment>
                <label>Height:</label>
                <StyledInput
                  type="number"
                  max={250}
                  value={box.height}
                  onChange={(e) => updateBoxSize(e, "HEIGHT")}
                ></StyledInput>
              </React.Fragment>
            )}
          </div>
          <div class="input-row">
            {background ? null : (
              <React.Fragment>
                <label>X:</label>
                <StyledInput
                  type="number"
                  value={box.x}
                  onChange={(e) => updateBoxCoord(e, "X")}
                ></StyledInput>
              </React.Fragment>
            )}
          </div>
        </div>

        {/* Right Column */}
        <div>
          <div class="input-row">
            <label>Color 2:</label>
            <ColorPicker
              box={box}
              updateBox={updateBox}
              primary={false}
            ></ColorPicker>
          </div>
          <div class="input-row">
            <label>Dur 2:</label>
            <StyledInput
              type="number"
              value={box.secondaryDuration}
              onChange={(e) => updateBoxDuration(e, "SECONDARY")}
            ></StyledInput>
          </div>
          <div class="input-row">
            {background ? null : (
              <React.Fragment>
                <label>Width:</label>
                <StyledInput
                  type="number"
                  max={300}
                  value={box.width}
                  onChange={(e) => updateBoxSize(e, "WIDTH")}
                ></StyledInput>
              </React.Fragment>
            )}
          </div>
          <div class="input-row">
            {background ? null : (
              <React.Fragment>
                <label>Y:</label>
                <StyledInput
                  type="number"
                  value={box.y}
                  onChange={(e) => updateBoxCoord(e, "Y")}
                ></StyledInput>
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    </StyledBoxConfig>
  );
};

const StyledBoxConfig = styled.div`
  border: 2px solid ${(props) => (props.visible ? "#7EC6FA" : "#DBDBDB")};
  border-radius: 10px;
  padding: 1rem;

  .header {
    margin-bottom: 1rem;
  }

  .checkbox {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .input-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
  }

  .input-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
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

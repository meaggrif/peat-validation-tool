import React from "react";
import styled from "styled-components";
import { BoxConfig } from "./BoxConfig";

export const ControlPanel = ({
  boxes,
  setBoxes,
  background,
  setBackground,
  isPlaying,
  setIsPlaying,
}) => {
  const updateBox = (updatedBox) => {
    const updatedBoxes = boxes.map((box) => {
      if (box.id === updatedBox.id) {
        return updatedBox;
      } else {
        return box;
      }
    });

    setBoxes(updatedBoxes);
  };

  return (
    <StyledControlPanel>
      <StyledButtonContainer>
        <StyledButton onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? "Stop" : "Play"}
        </StyledButton>
        <StyledButton>Save</StyledButton>
        <StyledButton>Delete</StyledButton>
      </StyledButtonContainer>
      <h3>Control Panel</h3>
      <BoxConfig
        box={background}
        updateBox={setBackground}
        background={true}
      ></BoxConfig>

      {boxes.map((box, i) => {
        return (
          <BoxConfig
            key={i}
            box={box}
            updateBox={updateBox}
            background={false}
          ></BoxConfig>
        );
      })}
    </StyledControlPanel>
  );
};

const StyledControlPanel = styled.div`
  background: white;
  padding: 10px;
  border-radius: 10px;
  display: grid;
  border: 1px solid "DBDBDB";
  grid-gap: 10px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 10px, rgba(0, 0, 0, 0.16) 0px 2px 5px;
`;

const StyledButton = styled.button`
  width: 50px;
  height: 25px;
  margin: 10px;
`;

const StyledButtonContainer = styled.div`
  display: inline-block;
`;

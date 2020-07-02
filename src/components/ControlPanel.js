import React from "react";
import styled from "styled-components";
import { BoxConfig } from "./BoxConfig";

export const ControlPanel = ({
  boxes,
  setBoxes,
  background,
  setBackground,
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
      <p>Background</p>
      <BoxConfig box={background} updateBox={setBackground}></BoxConfig>

      {boxes.map((box, i) => {
        return <BoxConfig key={i} box={box} updateBox={updateBox}></BoxConfig>;
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

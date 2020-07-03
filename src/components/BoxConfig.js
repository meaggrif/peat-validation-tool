import React, { useState } from "react";
import styled from "styled-components";
import { ColorPicker } from "./ColorPicker";

export const BoxConfig = ({ box, updateBox }) => {
  const [primaryDuration, setPrimaryDuration] = useState(1);
  const [secondaryDuration, setSecondaryDuration] = useState(
    box.secondaryDuration
  );

  const updateBoxDuration = (e, boxType) => {
    if (boxType === "PRIMARY") {
      setPrimaryDuration(e.target.value);
      updateBox({ ...box, primaryDuration: e.target.value });
      return;
    }

    setSecondaryDuration(e.target.value);
    updateBox({ ...box, secondaryDuration: e.target.value });
  };

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
          <input
            type="number"
            value={primaryDuration}
            onChange={(e) => updateBoxDuration(e, "PRIMARY")}
          ></input>
          s
        </div>
        <div className="config-grid">
          <p>Color 2:</p>
          <ColorPicker
            box={box}
            updateBox={updateBox}
            primary={false}
          ></ColorPicker>
          <input
            type="number"
            value={secondaryDuration}
            onChange={(e) => updateBoxDuration(e, "SECONDARY")}
          ></input>
          s
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

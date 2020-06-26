import React, { useState } from "react";
import styled from "styled-components";
import { BlockPicker } from "react-color";

export const BoxConfig = ({ box }) => {
  const [primary, setPrimary] = useState(false);
  const [secondary, setSecondary] = useState(false);

  return (
    <StyledBoxConfig>
      <p>{box.name}</p>
      <div>
        <div class="config-grid">
          <p>Color 1:</p>
          <StyledColorPicker
            color={box.primaryColor}
            onClick={() => setPrimary(!primary)}
          ></StyledColorPicker>
          <input></input>s
        </div>
        <div class="config-grid">
          <p>Color 2:</p>
          <StyledColorPicker
            color={box.secondaryColor}
            onClick={() => setSecondary(!secondary)}
          ></StyledColorPicker>
          {secondary ? (
            <BlockPicker color={box.secondaryColor}></BlockPicker>
          ) : null}
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

const StyledColorPicker = styled.div`
  height: 20px;
  width: 60px;
  background-color: ${(props) => props.color};
  border: 1px solid black;
`;

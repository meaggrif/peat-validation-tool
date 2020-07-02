import React from "react";
import { ColorBox } from "./ColorBox";
import styled from "styled-components";

export const BackgroundBox = ({ boxes, background }) => {
  return (
    <StyledBackgroundBox color={background.primaryColor}>
      {boxes.map((box, i) => (
        <ColorBox key={i} box={box}></ColorBox>
      ))}
    </StyledBackgroundBox>
  );
};

const StyledBackgroundBox = styled.div`
  background: ${(props) => props.color};
  padding: 25px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 25px;
`;

import React from "react";
import { ColorBox } from "./ColorBox";
import styled from "styled-components";

export const BackgroundBox = ({ boxes, background, isPlaying }) => {
  return (
    <StyledBackgroundBox color={background.primaryColor}>
      {boxes.map((box, i) => (
        <ColorBox key={i} box={box} isPlaying={isPlaying}></ColorBox>
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
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 10px, rgba(0, 0, 0, 0.16) 0px 2px 5px;
`;

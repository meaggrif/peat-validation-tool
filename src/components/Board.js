import React, { useState } from "react";
import { BackgroundBox } from "./BackgroundBox";
import { ControlPanel } from "./ControlPanel";
import { defaultBoxes } from "../utils/defaultBoxes";
import { defaultBackground } from "../utils/defaultBackground";
import styled from "styled-components";

export const Board = () => {
  // TODO: Setup useState for testSets
  const [isPlaying, setIsPlaying] = useState(false);
  const [background, setBackground] = useState(defaultBackground);
  const [boxes, setBoxes] = useState(defaultBoxes);

  return (
    <StyledBoard>
      <ControlPanel
        boxes={boxes}
        setBoxes={setBoxes}
        background={background}
        setBackground={setBackground}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      ></ControlPanel>
      <BackgroundBox
        boxes={boxes}
        background={background}
        isPlaying={isPlaying}
      ></BackgroundBox>
    </StyledBoard>
  );
};

const StyledBoard = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 50px;
`;

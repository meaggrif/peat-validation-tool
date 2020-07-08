import React, { useState } from "react";
import { BackgroundBox } from "./BackgroundBox";
import { ControlPanel } from "./ControlPanel";
import styled from "styled-components";

export const Board = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const [background, setBackground] = useState({
    primaryColor: "#000000",
    secondaryColor: "#FFFFFF",
    primaryDuration: 1,
    secondaryDuration: 1,
  });

  const [boxes, setBoxes] = useState([
    {
      id: 1,
      name: "Box 1",
      primaryColor: "#B6B6B6",
      secondaryColor: "#7EC6FA",
      primaryDuration: 1,
      secondaryDuration: 1,
      height: 100,
      width: 100,
    },
    {
      id: 2,
      name: "Box 2",
      primaryColor: "#B6B6B6",
      secondaryColor: "#7EC6FA",
      primaryDuration: 1,
      secondaryDuration: 1,
      height: 100,
      width: 100,
    },
    {
      id: 3,
      name: "Box 3",
      primaryColor: "#B6B6B6",
      secondaryColor: "#7EC6FA",
      primaryDuration: 1,
      secondaryDuration: 1,
      height: 100,
      width: 100,
    },
    {
      id: 4,
      name: "Box 4",
      primaryColor: "#B6B6B6",
      secondaryColor: "#7EC6FA",
      primaryDuration: 1,
      secondaryDuration: 1,
      height: 100,
      width: 100,
    },
  ]);

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

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
      visible: true,
      name: "Box 1",
      primaryColor: "#B6B6B6",
      secondaryColor: "#7EC6FA",
      primaryDuration: 333,
      secondaryDuration: 333,
      height: 150,
      width: 150,
      x: 50,
      y: 50,
    },
    {
      id: 2,
      visible: true,
      name: "Box 2",
      primaryColor: "#B6B6B6",
      secondaryColor: "#7EC6FA",
      primaryDuration: 333,
      secondaryDuration: 333,
      height: 150,
      width: 150,
      x: 550,
      y: 50,
    },
    {
      id: 3,
      visible: true,
      name: "Box 3",
      primaryColor: "#B6B6B6",
      secondaryColor: "#7EC6FA",
      primaryDuration: 333,
      secondaryDuration: 333,
      height: 150,
      width: 150,
      x: 50,
      y: 400,
    },
    {
      id: 4,
      visible: true,
      name: "Box 4",
      primaryColor: "#B6B6B6",
      secondaryColor: "#7EC6FA",
      primaryDuration: 333,
      secondaryDuration: 333,
      height: 150,
      width: 150,
      x: 550,
      y: 400,
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

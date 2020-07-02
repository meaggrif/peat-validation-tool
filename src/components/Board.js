import React, { useState } from "react";
import { BackgroundBox } from "./BackgroundBox";
import { ControlPanel } from "./ControlPanel";
import styled from "styled-components";

export const Board = () => {
  const [background, setBackground] = useState({
    primaryColor: "#231902",
    secondaryColor: "#321902",
    primaryDuration: 1,
    secondaryDuration: 1,
  });

  const [boxes, setBoxes] = useState([
    {
      id: 1,
      name: "Box 1",
      primaryColor: "#b4da55",
      secondaryColor: "#eaeaea",
      primaryDuration: 1,
      secondaryDuration: 1,
      height: 100,
      width: 100,
    },
    {
      id: 2,
      name: "Box 2",
      primaryColor: "#b4da55",
      secondaryColor: "#eaeaea",
      primaryDuration: 1,
      secondaryDuration: 1,
      height: 100,
      width: 100,
    },
    {
      id: 3,
      name: "Box 3",
      primaryColor: "#b4da55",
      secondaryColor: "#eaeaea",
      primaryDuration: 1,
      secondaryDuration: 1,
      height: 100,
      width: 100,
    },
    {
      id: 4,
      name: "Box 4",
      primaryColor: "#b4da55",
      secondaryColor: "#eaeaea",
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
      ></ControlPanel>
      <BackgroundBox boxes={boxes} background={background}></BackgroundBox>
    </StyledBoard>
  );
};

const StyledBoard = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 50px;
`;

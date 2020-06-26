import React, { useState } from "react";
import { BackgroundBox } from "./BackgroundBox";
import { ControlPanel } from "./ControlPanel";
import styled from "styled-components";

export const Board = () => {
  const [boxes, setBoxes] = useState([
    {
      name: "Box 1",
      primaryColor: "#ffffff",
      secondaryColor: "#eaeaea",
      primaryDuration: 1,
      secondaryDuration: 1,
      height: 100,
      width: 100,
    },
    {
      name: "Box 2",
      primaryColor: "#ffffff",
      secondaryColor: "#eaeaea",
      primaryDuration: 1,
      secondaryDuration: 1,
      height: 100,
      width: 100,
    },
    {
      name: "Box 3",
      primaryColor: "#ffffff",
      secondaryColor: "#eaeaea",
      primaryDuration: 1,
      secondaryDuration: 1,
      height: 100,
      width: 100,
    },
    {
      name: "Box 4",
      primaryColor: "#ffffff",
      secondaryColor: "#eaeaea",
      primaryDuration: 1,
      secondaryDuration: 1,
      height: 100,
      width: 100,
    },
  ]);

  return (
    <StyledBoard>
      <ControlPanel boxes={boxes}></ControlPanel>
      <BackgroundBox boxes={boxes}></BackgroundBox>
    </StyledBoard>
  );
};

const StyledBoard = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 50px;
`;

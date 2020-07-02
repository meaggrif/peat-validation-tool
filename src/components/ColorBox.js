import React from "react";
import styled from "styled-components";

export const ColorBox = ({ box }) => {
  return (
    <StyledColorBox color={box.primaryColor}>
      <p>{box.primaryColor}</p>
      <p>{box.secondaryColor}</p>
    </StyledColorBox>
  );
};

const StyledColorBox = styled.div`
  background: ${(props) => props.color};
  height: 200px;
  width: 300px;
  margin: 0 auto;
`;

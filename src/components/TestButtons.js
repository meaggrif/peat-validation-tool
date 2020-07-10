import React from "react";
import styled from "styled-components";

export const TestButtons = () => {
  return (
    <div>
      <StyledButton>Test 1</StyledButton>
      <StyledButton>Test 2</StyledButton>
      <StyledButton>Test 3</StyledButton>
      <StyledButton>Test 4</StyledButton>
      <StyledButton>Test 5</StyledButton>
      <StyledButton>Test 6</StyledButton>
    </div>
  );
};

const StyledButton = styled.button`
  width: 100px;
  height: 25px;
  margin: 10px;
`;

import React from "react";
import styled from "styled-components";

export const ActionButtons = () => {
  return (
    <div>
      <StyledButton>Play</StyledButton>
      <StyledButton>Save</StyledButton>
      <StyledButton>Delete</StyledButton>
    </div>
  );
};

const StyledButton = styled.button`
  width: 100px;
  height: 25px;
  margin: 10px;
`;

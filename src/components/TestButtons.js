import React from "react";
import styled from "styled-components";

export const TestButtons = ({ testSets, setBackground, setBoxes }) => {
  const handleButtonClick = (testSet) => {
    setBoxes(testSet.slice(0, 4));
    setBackground(testSet[4]);
  };

  return (
    <div>
      {Object.entries(testSets).map(([testSetId, testSet]) => {
        return (
          <StyledButton onClick={() => handleButtonClick(testSet)}>
            Test {testSetId}
          </StyledButton>
        );
      })}
    </div>
  );
};

const StyledButton = styled.button`
  width: 100px;
  height: 25px;
  margin: 10px;
`;

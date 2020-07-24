import React from "react";
import styled from "styled-components";

/**
 * TestButtons.js
 *
 * Renders a button for each testSet. On click of a button set the application state
 * to the corrosponding testSet
 *
 * testSets = [
 *   {
 *     id: 1,
 *     name: "Supa Hot Fire 🔥",
 *     background: {background} => See Board.js
 *     boxes: [
 *       {box},
 *       {box},
 *       ...
 *     ]
 *   },
 *   {testSet},
 *   {testSet},
 *   ...
 * ]
 */
export const TestButtons = ({ testSets, setBackground, setBoxes }) => {
  const handleButtonClick = (testSet) => {
    // setBackground(testSet.background);
    // setBoxes(testSet.boxes);
  };

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

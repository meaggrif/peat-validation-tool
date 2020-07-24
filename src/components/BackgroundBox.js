import React, { useEffect, useState } from 'react';
import { ColorBox } from './ColorBox';
import { TestButtons } from './TestButtons';
import styled from 'styled-components';

export const BackgroundBox = ({
  boxes,
  background,
  isPlaying,
  testSets,
  setBoxes,
  setBackground,
}) => {
  const [isPrimary, setIsPrimary] = useState(true);

  useEffect(() => {
    if (!isPlaying) {
      return;
    }

    const scheduleColorChange = (duration) => {
      setTimeout(() => {
        if (isPrimary) {
          scheduleColorChange(background.secondaryDuration);
        } else {
          scheduleColorChange(background.primaryDuration);
        }

        setIsPrimary((primary) => !primary);
      }, duration);
    };

    scheduleColorChange(background.primaryDuration);
  }, [isPlaying]);

  return (
    <div>
      <StyledBackgroundBox
        color={isPrimary ? background.primaryColor : background.secondaryColor}
      >
        {boxes.map((box, i) => (
          <ColorBox key={i} box={box} isPlaying={isPlaying}></ColorBox>
        ))}
      </StyledBackgroundBox>
      <TestButtons
        testSets={testSets}
        setBoxes={setBoxes}
        setBackground={setBackground}
      ></TestButtons>
    </div>
  );
};

const StyledBackgroundBox = styled.div`
  background: ${(props) => props.color};
  position: relative;
  padding: 25px;
  display: grid;

  height: 80vh;
  width: 70vw;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr;
  grid-gap: 25px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 10px, rgba(0, 0, 0, 0.16) 0px 2px 5px;
`;

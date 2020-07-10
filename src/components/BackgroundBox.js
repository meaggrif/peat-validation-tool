import React, { useEffect, useRef, useState } from "react";
import { ColorBox } from "./ColorBox";
import styled from "styled-components";

export const BackgroundBox = ({ boxes, background, isPlaying }) => {
  const [isPrimary, setIsPrimary] = useState(true);

  const isPlayingRef = useRef(isPlaying);
  isPlayingRef.current = isPlaying;

  useEffect(() => {
    isPlayingRef.current = isPlaying;
    if (!isPlaying) {
      return;
    }

    const scheduleColorChange = (duration) => {
      if (!isPlayingRef.current) {
        return;
      }

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
  }, [
    background.primaryDuration,
    background.secondaryDuration,
    isPlaying,
    isPrimary,
  ]);

  return (
    <StyledBackgroundBox color={background.primaryColor}>
      {boxes.map((box, i) => (
        <ColorBox key={i} box={box} isPlaying={isPlaying}></ColorBox>
      ))}
    </StyledBackgroundBox>
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

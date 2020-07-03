import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

export const ColorBox = ({ box, isPlaying }) => {
  const [isPrimary, setIsPrimary] = useState(true);

  const isPlayingRef = useRef(isPrimary);
  isPlayingRef.current = isPrimary;

  useEffect(() => {
    isPlayingRef.current = isPrimary;
    if (!isPlaying) {
      return;
    }

    const scheduleColorChange = (duration) => {
      if (!isPlayingRef.current) {
        return;
      }

      setTimeout(() => {
        if (isPrimary) {
          scheduleColorChange(box.secondaryDuration);
        } else {
          scheduleColorChange(box.primaryDuration);
        }

        setIsPrimary((primary) => !primary);
      }, duration * 1000);
    };

    scheduleColorChange(box.primaryDuration);
  }, [isPlaying]);

  return (
    <StyledColorBox color={isPrimary ? box.primaryColor : box.secondaryColor}>
      <p>{box.primaryColor}</p>
      <p>{box.secondaryColor}</p>
      <p>{box.primaryDuration}</p>
      <p>{box.secondaryDuration}</p>
    </StyledColorBox>
  );
};

const StyledColorBox = styled.div`
  background: ${(props) => props.color};
  height: 200px;
  width: 300px;
  margin: 0 auto;
`;

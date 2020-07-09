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
      }, duration);
    };

    scheduleColorChange(box.primaryDuration);
  }, [isPlaying]);

  return box.visible ? (
    <StyledColorBox
      color={isPrimary ? box.primaryColor : box.secondaryColor}
      height={box.height}
      width={box.width}
      x={box.x}
      y={box.y}
    >
      <p>{box.id}</p>
      <p>{box.primaryColor}</p>
      <p>{box.secondaryColor}</p>
      <p>{box.primaryDuration}</p>
      <p>{box.secondaryDuration}</p>
      <p>{box.height}</p>
      <p>{box.width}</p>
    </StyledColorBox>
  ) : (
    <div></div>
  );
};

const StyledColorBox = styled.div`
  position: absolute;
  top: ${(props) => props.y + "px"};
  left: ${(props) => props.x + "px"};
  background: ${(props) => props.color};
  height: ${(props) => props.height + "px"};
  width: ${(props) => props.width + "px"};
  margin: 0 auto;
`;

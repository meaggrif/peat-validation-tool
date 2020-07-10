import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

export const ColorBox = ({ box, isPlaying }) => {
  const [isPrimary, setIsPrimary] = useState(true);

  const isPlayingRef = useRef(isPlaying);
  isPlayingRef.current = isPlaying;

  const isPrimaryRef = useRef(isPrimary);
  isPrimaryRef.current = isPrimary;

  useEffect(() => {
    if (!isPlayingRef.current) {
      return;
    }

    const scheduleColorChange = (duration) => {
      if (!isPlayingRef.current) {
        return;
      }

      setTimeout(() => {
        if (isPrimaryRef.current) {
          scheduleColorChange(box.secondaryDuration);
        } else {
          scheduleColorChange(box.primaryDuration);
        }

        setIsPrimary((primary) => !primary);
      }, duration);
    };

    scheduleColorChange(box.primaryDuration);
  }, [box.primaryDuration, box.secondaryDuration, isPlaying, isPrimary]);

  return box.visible ? (
    <StyledColorBox
      color={isPrimary ? box.primaryColor : box.secondaryColor}
      height={box.height}
      width={box.width}
      x={box.x}
      y={box.y}
    ></StyledColorBox>
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

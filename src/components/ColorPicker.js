import React, { useState } from "react";
import styled from "styled-components";
import { BlockPicker, ChromePicker } from "react-color";

export const ColorPicker = ({ box, updateBox, primary }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(!open);
  };

  const handleChange = (color) => {
    if (primary) {
      updateBox({ ...box, primaryColor: color.hex });
      return;
    }

    updateBox({ ...box, secondaryColor: color.hex });
  };

  return (
    <StyledColorPicker color={primary ? box.primaryColor : box.secondaryColor}>
      <div className="swatch" onClick={handleClick}>
        <div className="color" />
      </div>

      {open ? (
        <div className="popover">
          <div className="cover" onClick={handleClose} />
          <ChromePicker
            color={primary ? box.primaryColor : box.secondaryColor}
            onChange={handleChange}
          />
        </div>
      ) : null}
    </StyledColorPicker>
  );
};

const StyledColorPicker = styled.div`
  .swatch {
    margin: 0 auto;
    display: flex;
    background: #fff;
    border-radius: 1px;
    height: 20px;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
    display: inline-block;
    cursor: pointer;
  }

  .color {
    width: 40px;
    margin: 2px;
    height: 12px;
    border-radius: 2px;
    background: ${(props) => props.color};
  }

  .popover {
    position: absolute;
    z-index: 2;
  }

  .cover {
    position: fixed;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
  }
`;

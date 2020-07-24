import React from 'react';
import styled from 'styled-components';
import { BoxConfig } from './BoxConfig';
import { CSVLink } from 'react-csv';
import CSVReader from 'react-csv-reader';

const parseOptions = {
  header: true,
  dynamicTyping: true,
  skipEmptyLines: true,
};

export const ControlPanel = ({
  boxes,
  setBoxes,
  background,
  setBackground,
  isPlaying,
  setIsPlaying,
  setTestSets,
}) => {
  const updateBox = (updatedBox) => {
    const updatedBoxes = boxes.map((box) => {
      if (box.id === updatedBox.id) {
        return updatedBox;
      } else {
        return box;
      }
    });

    setBoxes(updatedBoxes);
  };

  const handleFileUpload = (data) => {
    // Split the data by testSetId
    const testSets = { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [] };
    for (const box of data) {
      testSets[box.testSetId].push(box);
    }
    setTestSets(testSets);
    debugger;
    setBoxes(testSets[1].slice(0, 4));
    setBackground(testSets[1][4]);
  };

  const handlePlayStop = () => {
    if (isPlaying) {
      var id = window.setTimeout(function () {}, 0);

      while (id--) {
        window.clearTimeout(id); // will do nothing if no timeout with id is present
      }
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <StyledControlPanel>
      <StyledButtonContainer>
        <StyledButton onClick={handlePlayStop}>
          {isPlaying ? 'Stop' : 'Play'}
        </StyledButton>
        <StyledButton>Save</StyledButton>
        <StyledButton>Delete</StyledButton>
        <CSVLink
          data={[...boxes, background]}
          filename={'peat-export.csv'}
          headers={[
            'id',
            'name',
            'visible',
            'primaryColor',
            'secondaryColor',
            'primaryDuration',
            'secondaryDuration',
            'height',
            'width',
            'x',
            'y',
          ]}
          target="_blank"
        >
          Export
        </CSVLink>
      </StyledButtonContainer>

      <CSVReader
        parserOptions={parseOptions}
        onFileLoaded={(data, fileInfo) => handleFileUpload(data)}
      />

      <h3>Control Panel</h3>
      <BoxConfig
        box={background}
        updateBox={setBackground}
        background={true}
      ></BoxConfig>

      {boxes.map((box, i) => {
        return (
          <BoxConfig
            key={i}
            box={box}
            updateBox={updateBox}
            background={false}
          ></BoxConfig>
        );
      })}
    </StyledControlPanel>
  );
};

const StyledControlPanel = styled.div`
  background: white;
  padding: 10px;
  border-radius: 10px;
  display: grid;
  border: 1px solid 'DBDBDB';
  grid-gap: 10px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 10px, rgba(0, 0, 0, 0.16) 0px 2px 5px;
`;

const StyledButton = styled.button`
  width: 50px;
  height: 25px;
  margin: 10px;
`;

const StyledButtonContainer = styled.div`
  display: inline-block;
`;

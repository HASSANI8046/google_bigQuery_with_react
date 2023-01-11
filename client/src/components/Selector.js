import React, { useState } from 'react';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import styled from 'styled-components';
import { MenuItem } from '@material-ui/core';
import { InputLabel, Select } from '@material-ui/core';

const StyledToolbar = styled(Toolbar)`
position: fixed;
bottom: 0;
left: 0;
right: 0;
z-index: 1;
`;

const StyledButton = styled.button`
font-size: 8px;
padding: 12px 24px;
background-color: ${props => props.selected ? '#FDC6C0':'transparent'};
color: ${props => props.selected ? 'white':'black'};
`;

const Selector = (props) => {
  const handleClick = (query) => {
    setSelected(query)
    props.onQueryChange(query, props.game1);
  };
  const handleChange = (event) => {
    props.onQueryChange(event.target.value, props.game1);
  };

  const [selected, setSelected] = useState('');

  return (
    <StyledToolbar>
      <ToolbarGroup firstChild={false}>
      <StyledButton selected={selected === 'A'} onClick={() => handleClick('A')}>A</StyledButton>
      <StyledButton selected={selected === 'I'} onClick={() => handleClick('I')}>I</StyledButton>
      <StyledButton selected={selected === 'US A'} onClick={() => handleClick('US A')}>US A</StyledButton>
      <StyledButton selected={selected === 'US I'} onClick={() => handleClick('US I')}>US I</StyledButton>
      <StyledButton selected={selected === 'UK A'} onClick={() => handleClick('UK A')}>UK A</StyledButton>
      <StyledButton selected={selected === 'UK I'} onClick={() => handleClick('UK I')}>UK I</StyledButton>
      <StyledButton selected={selected === 'PK A'} onClick={() => handleClick('PK A')}>PK A</StyledButton>
      <StyledButton selected={selected === 'PK I'} onClick={() => handleClick('PK I')}>PK I</StyledButton>
        {/* Add more buttons as needed */}
      </ToolbarGroup>
      <Select value={props.query} onChange={handleChange} >
        <MenuItem value="" disabled>
          A
        </MenuItem>
        <MenuItem value="BR A">BR</MenuItem>
      </Select>
      <Select value={props.query} onChange={handleChange}>
      <MenuItem value="" disabled>
          I
        </MenuItem>
        <MenuItem value="BR I">BR</MenuItem>
      </Select>
    </StyledToolbar>
  );
};

export default Selector;

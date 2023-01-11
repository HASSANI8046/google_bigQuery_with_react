import React, { useState } from 'react';
import { Drawer, IconButton, Select } from '@material-ui/core';
import Menu from '@material-ui/icons/Menu';
import { MenuItem } from '@material-ui/core';


const SideBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedGame, setSelectedGame] = useState('');

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (event) => {
    setSelectedGame(event.target.value);
    props.onIdChange(event.target.value);
  };

  return (
    <React.Fragment>
      <IconButton onClick={handleToggle}>
        <Menu />
      </IconButton>
      <Drawer open={isOpen} onClose={handleToggle} variant="temporary">
        <Select value={selectedGame} onChange={handleChange}
        >
          <MenuItem value="x2">X2</MenuItem>
          <MenuItem value="2248">2248</MenuItem>
          // other options
        </Select>
      </Drawer>
    </React.Fragment>
  );
};

export default SideBar;

import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useMinimalSelectStyles } from '@mui-treasury/styles/select/minimal';
import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(2),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.primary.light,
    border: '1px solid #22800a',
    fontSize: 14,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#22800a',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}));

const InFormInput = () => {

  const [filter, setFilter] = useState('');

  const minimalSelectClasses = useMinimalSelectStyles();

  const menuProps = {
    classes: {
      paper: minimalSelectClasses.paper,
      list: minimalSelectClasses.list
    },
    anchorOrigin: {
      vertical: "bottom",
        horizontal: "left"
    },
    transformOrigin: {
      vertical: "top",
        horizontal: "left"
    }
  };  

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">Filter</InputLabel>
      <Select
        classes={{ root: minimalSelectClasses.select }}      
        labelId="demo-select-small"
        id="demo-select-small"
        MenuProps={menuProps}
        value={filter}
        label="Filter"
        onChange={handleChange}
        input={<BootstrapInput />}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={9}>Bonus Points</MenuItem>
        <MenuItem value={8}>Bps System</MenuItem>
        <MenuItem value={0}>Goals Scored</MenuItem>
      </Select>
    </FormControl>
  );
}

export default InFormInput
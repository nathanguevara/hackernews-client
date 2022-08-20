import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Dropdown() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="dropdown">
        <p>Search</p>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label"></InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Age"
        >
        
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>All</MenuItem>
          <MenuItem value={20}>Stories</MenuItem>
          <MenuItem value={30}>Comments</MenuItem>
        </Select>
      </FormControl>
      <p>by</p>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-filled-label"></InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Popularity</MenuItem>
          <MenuItem value={20}>Date</MenuItem>
        </Select>
      </FormControl>
      <p>for</p>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-filled-label"></InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>All Time</MenuItem>
          <MenuItem value={20}>Last 24h</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default Dropdown
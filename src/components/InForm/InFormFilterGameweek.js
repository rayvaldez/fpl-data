import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function InFormFilterGameweek(props) {
  const [gameweekNo, setGameweekNo] = React.useState(5);

  const handleChange = (event) => {
    setGameweekNo(event.target.value);
    props.updateGwNo(event.target.value)
  };

  return (  
    <ToggleButtonGroup
      size="medium"
      value={gameweekNo}
      exclusive
      onChange={handleChange}
      aria-label="number of gameweeks"
    >
      <ToggleButton value={2} aria-label="2 gameweeks" sx={{ color: '#faf9f6'}}>
        2
      </ToggleButton>
      <ToggleButton value={3} aria-label="3 gameweeks" sx={{ color: '#faf9f6'}}>
        3
      </ToggleButton>
      <ToggleButton value={4} aria-label="4 gameweeks" sx={{ color: '#faf9f6'}}>
        4
      </ToggleButton>
      <ToggleButton value={5} aria-label="5 gameweeks" sx={{ color: '#faf9f6'}}>
        5
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
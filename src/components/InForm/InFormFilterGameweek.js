import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function InFormFilterGameweek() {
  const [alignment, setAlignment] = React.useState('left');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
      <ToggleButton value="left" aria-label="left aligned">
        2
      </ToggleButton>
      <ToggleButton value="center" aria-label="centered">
        3
      </ToggleButton>
      <ToggleButton value="right" aria-label="right aligned">
        4
      </ToggleButton>
      <ToggleButton value="justify" aria-label="justified">
        5
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
import React from 'react';
import Typography from '@mui/material/Typography';

const next5FixturesTeam = (props) => {
  console.log(props)
  return (
    <div>
      <Typography variant='body1' sx={{ color: '#faf9f6'}}>
       {props.team.short_name}
      </Typography>
    </div>
  )
}

export default next5FixturesTeam
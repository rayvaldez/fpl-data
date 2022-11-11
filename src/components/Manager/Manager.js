import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react';
import ManagerGameweekSummary from './ManagerGameweekSummary';

const Manager = (props) => {

  return (
    props.manager.chips ?
    <Box className="manager">
      <Box sx={{
        p: '0.1em 1em 0.5em',
        m: '0 4vw 1vh 4vw'
      }}>
        <Grid item xs={12}>
          <Typography variant="h6" sx={{
            color: 'secondary.main',
            textAlign: 'center'
          }}>
          {props.manager.first_name} {props.manager.last_name + " - "} {props.manager.team_name}
          </Typography>
        </Grid>
      </Box>
      <Box sx={{
        p: '0.1vh 1em 0.8em',
        m: '1vh 4vw 3vh 4vw',
        bgcolor: 'background.secondary',
        borderRadius: '10px'
      }}>
        <ManagerGameweekSummary manager={props.manager}/>
      </Box>
    </Box>
    : <Box></Box>
  )
}

export default Manager;

import React from 'react';
import { gameData } from '../gameData';
import { Team } from './Team';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const LandingInformation = () => {

  return (
    <Box sx={{ m: '0vh 4vw 2vh 4vw' }}>
     <Team team={gameData[0].teams[0]}/>
    </Box>
  )
}

export default LandingInformation;
import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const addPeriod = (int) => {
  const number = int.toString().split('');
  return `${number[0]}` + `${number[1]}` + "." + `${number[2]}` + `${number[3]}`
}

export const Team = (props) => {

  return (
    <Box sx={{ 
      backgroundColor: '#26262a', 
      borderRadius: '13px', 
      p: '1em', 
      ml: '15px', 
      width: '70vw',
      height: '100%'
      }}
    >
      <Typography sx={{ 
        color: '#faf9f6'
      }}
      >
        {props.team.name}
      </Typography><br></br>
      <Typography sx={{ color: '#FAF9F6' }}>  
        Strength - {props.team.strength}<br></br>
        Home attack strength - {addPeriod(props.team.strength_attack_home)}<br></br>
        Home defence strength - {addPeriod(props.team.strength_defence_home)}<br></br>
        Away attack strength - {addPeriod(props.team.strength_attack_away)}<br></br>
        Away defence strength - {addPeriod(props.team.strength_defence_away)}<br></br>
        Overall home - {addPeriod(props.team.strength_overall_home)}<br></br>
        Overall away - {addPeriod(props.team.strength_overall_away)}<br></br>
      </Typography>  
    </Box>
  )
};
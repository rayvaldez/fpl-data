import React from 'react';
import Typography from '@mui/material/Typography';
import { Card } from '@mui/material';

const addPeriod = (int) => {
  const number = int.toString().split('');
  return `${number[0]}` + `${number[1]}` + "." + `${number[2]}` + `${number[3]}`
}

export const Team = (props) => {

  return (
    <div>
      {console.log(props.team)}
      <Card variant="outlined" sx={{ backgroundColor: '#26262a', borderRadius: '10px'}}>
        <Typography variant='h6' sx={{ 
          color: '#faf9f6',
          p: '1.5vh 0vw 0vh 6vw'
        }}
        >
          {props.team.name}
        </Typography>
        <br></br>
        <br></br>
        <Typography sx={{ color: '#FAF9F6' }}>
          <ul>
            <li>Strength - {props.team.strength}</li>
            <li>Home attack strength - {addPeriod(props.team.strength_attack_home)}</li>
            <li>Home defence strength - {addPeriod(props.team.strength_defence_home)}</li>
            <li>Away attack strength - {addPeriod(props.team.strength_attack_away)}</li>
            <li>Away defence strength - {addPeriod(props.team.strength_defence_away)}</li>
            <br></br>
            <li>Overall home - {addPeriod(props.team.strength_overall_home)}</li>
            <li>Overall away - {addPeriod(props.team.strength_overall_away)}</li>
          </ul>
        </Typography>  
      </Card>
    </div>
  )
};
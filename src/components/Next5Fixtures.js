import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import teamJSON from './jsonData/teamJSON';
import Next5FixturesTeam from './Next5FixturesTeam';

const Next5Fixtures = (props) => {

  let next5 = []

  const currentGameweek = props.fixtures?.find(element => element.event != null && element.finished === false)

  const newArray = () => {
    props.fixtures.forEach(element => {
      if (element.event === currentGameweek.event || (element.event > currentGameweek.event && element.event < currentGameweek.event + 5)) {
        console.log(element)
        next5.push(element)
      }
    })
  }

  newArray()

  console.log(next5)

  return (
    <Box sx={{
      p: '0.2em 1em 0.6em',
      m: '2vh 4vw 2vh 4vw',
      bgcolor: '#26262a',
      borderRadius: '10px'
    }}>
      <Typography variant='subtitle2' sx={{ color: '#faf9f6', textAlign: 'center'}}>
        Next 5
      </Typography>
      {teamJSON.map(team => 
        <Next5FixturesTeam key={team.id} team={team} />
      )}
    </Box>  
  )
}

export default Next5Fixtures
import React from 'react';
import Typography from '@mui/material/Typography';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import teamJSON from './jsonData/teamJSON';

const next5FixturesTeam = (props) => {
  
  const fixtures = props?.fixtures;
  const team = props?.team;
  const nextGW = props?.nextGW;
  let filteredFixtures = [];
  let gameweek = nextGW;

  let paddedArray = []

  const padArray = () => {
    let gameweekStart = nextGW
    let gameweekEnd = gameweekStart + 5;

    do {
      paddedArray.push({id:Math.floor(Math.random() * 11), event: gameweekStart, team_a: 0, team_h: 0})
      gameweekStart ++
    } while (gameweekStart < gameweekEnd)
  }

  padArray()

  
  const filterFixtures = () => {
    fixtures.forEach(fixture => {
      if (fixture.team_a === team.id || fixture.team_h === team.id) {
        filteredFixtures.push(fixture)
      }
    })
  }
  
  filterFixtures()

  const splicePaddedArray = () => {
    filteredFixtures.forEach(element => {
      const index = paddedArray.map(object => object.event).indexOf(element.event)
      paddedArray.splice(index, 1, element)
    })
  }

  splicePaddedArray()

  const getDifficultyColor = (teamDifficulty, team_name) => {
    if (teamDifficulty === 1) {
      return (
        <Typography sx={{ color: '#faf9f6', backgroundColor: '#2cba00', h: '1em', w: '1em', pt: '2px', borderRadius: '4px' }}>
          
        </Typography>
      )
    } else if (teamDifficulty === 2) {
      return (
        <Box sx={{ backgroundColor: '#08FF08', textAlign: 'center', height: '1.8em', width: '4.2em', borderRadius: '4px' }}>
          <Typography variant='subtitle2' sx={{ color: '#28282b', pt: '2px' }}>
            {team_name}
          </Typography>
        </Box>
      )
    } else if (teamDifficulty === 3) {
      return (
        <Box sx={{ backgroundColor: '#fff400', textAlign: 'center', height: '1.8em', width: '4.2em', borderRadius: '4px' }}>
          <Typography variant='subtitle2' sx={{ color: '#28282b', pt: '2px' }}>
            {team_name}
          </Typography>
        </Box>
      )
    } else if (teamDifficulty === 4) {
      return (
        <Box sx={{ backgroundColor: '#ffa700', textAlign: 'center', height: '1.8em', width: '4.2em', borderRadius: '4px' }}>
          <Typography variant='subtitle2' sx={{ color: '#28282b', pt: '2px' }}>
            {team_name}
          </Typography>
        </Box> 
      )
    } else if (teamDifficulty === 5) {
      return (
        <Box sx={{ backgroundColor: '#df0f00', textAlign: 'center', height: '1.8em', width: '4.2em', borderRadius: '4px' }}>
          <Typography variant='subtitle2' sx={{ color: '#faf9f6', pt: '2px' }}>
            {team_name}
          </Typography>
        </Box>       
      )
    } else {
      return (
        <Box sx={{ backgroundColor: '#949494', height: '1.8em', width: '4.2em', pt: '2px', borderRadius: '4px' }}>
        </Box>
      )
    }
  }

  return (
    <TableRow>
      <TableCell align='right'>
        <Typography variant='body2' sx={{ color: '#faf9f6'}}>
          {team.short_name}
        </Typography>
      </TableCell>
      {paddedArray.map(fixture => {
        const homeTeam = teamJSON && teamJSON.find(element => element.id === fixture.team_h)
        const awayTeam = teamJSON && teamJSON.find(element => element.id === fixture.team_a)
 
        if (fixture?.event === gameweek) { 
          gameweek++
          return (
            <TableCell align='right' key={fixture.id}>
              {fixture?.team_a !== team.id ? getDifficultyColor(fixture?.team_h_difficulty, awayTeam?.short_name + '(H)') : getDifficultyColor(fixture.team_a_difficulty, homeTeam?.short_name + '(A)')}
            </TableCell>
          )
        } else {
          gameweek++
           return (
           <TableCell align='right' key={fixture.id}>
              {getDifficultyColor()}
            </TableCell>        
          )
        }
      })}
    </TableRow>
  )
}

export default next5FixturesTeam
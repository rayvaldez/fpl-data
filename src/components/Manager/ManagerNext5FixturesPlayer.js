import React from 'react';
import { Box, TableRow, TableCell, Typography } from '@mui/material';
import teamJSON from '../jsonData/teamJSON';

const ManagerNext5FixturesPlayer = (props) => {

  let filteredFixtures = []

  console.log(props)

  const player = props?.player
  const team = props?.player.team
  const fixtures = props?.fixtures
  let gameweek = props?.gameweek

  const filterFixtures = () => {
    fixtures?.forEach(fixture => {
      if (fixture.team_a === team || fixture.team_h === team) {
        filteredFixtures.push(fixture)
      }
    })
  }
  
  filterFixtures()

  console.log(filteredFixtures)

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
    props.fixtures.length ? 
    <TableRow>
      <TableCell align='right'>
        <Typography variant='body2' sx={{ color: '#faf9f6'}}>
          {player.web_name}
        </Typography>
      </TableCell>
      {filteredFixtures?.map(fixture => {
        const homeTeam = teamJSON && teamJSON.find(element => element.id === fixture.team_h)
        const awayTeam = teamJSON && teamJSON.find(element => element.id === fixture.team_a)

        if (fixture?.event === gameweek) { 
          gameweek++
          return ( 
            <TableCell align='right' key={fixture.id}>
              {fixture?.team_a !== team ? getDifficultyColor(fixture?.team_h_difficulty, awayTeam?.short_name + '(H)') : getDifficultyColor(fixture.team_a_difficulty, homeTeam?.short_name + '(A)')}
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
    : <Box></Box>
  )
}

export default ManagerNext5FixturesPlayer
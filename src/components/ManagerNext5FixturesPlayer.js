import React from 'react'
import { TableRow, TableCell, Typography } from '@mui/material'

const ManagerNext5FixturesPlayer = (props) => {
  console.log(props)

  const player = props?.player

  return (
    <TableRow>
      <TableCell align='right'>
        <Typography variant='body2' sx={{ color: '#faf9f6'}}>
          {player.web_name}
        </Typography>
      </TableCell>
      {/* {paddedArray.map(fixture => {
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
      })} */}
    </TableRow>
  )
}

export default ManagerNext5FixturesPlayer
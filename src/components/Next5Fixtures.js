import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import teamJSON from './jsonData/teamJSON';
import Next5FixturesTeam from './Next5FixturesTeam';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import Paper from '@mui/material/Paper';
import { TableBody, TableHead, TableRow, TableCell } from '@mui/material';

const Next5Fixtures = (props) => {

  let next5 = []

  const currentGameweek = props.fixtures?.find(element => element.event != null && element.finished === false)

  const filteredArray = () => {
    props.fixtures?.forEach(element => {
      if (element.event === currentGameweek.event || (element.event > currentGameweek.event && element.event < currentGameweek.event + 5)) {
        next5.push(element)
      } 
    })
  }

  filteredArray()

  const findNextGameweek = next5.find(fixture => fixture.finished === false)
  const nextGameweekNo = findNextGameweek?.event

  return (
    <Box sx={{
      p: '0.2em 1em 0.6em',
      m: '2vh 4vw 2vh 4vw',
      bgcolor: '#26262a',
      borderRadius: '10px'
    }}>
        <Typography variant='subtitle2' sx={{ 
          color: '#33BB00',
          fontFamily: 'masque',
          textAlign: 'center'
        }}>
          Next Five
        </Typography>

      <TableContainer component={Paper}>
        <Table sx={{ backgroundColor: '#26262a'}} size='small' aria-label="table">
          <TableHead>
            <TableRow>
              <TableCell>

              </TableCell>
              <TableCell align='center' sx={{ color: '#faf9f6'}}>GW{nextGameweekNo}</TableCell>
              <TableCell align='center' sx={{ color: '#faf9f6'}}>GW{nextGameweekNo + 1}</TableCell>
              <TableCell align='center' sx={{ color: '#faf9f6'}}>GW{nextGameweekNo + 2}</TableCell>
              <TableCell align='center' sx={{ color: '#faf9f6'}}>GW{nextGameweekNo + 3}</TableCell>
              <TableCell align='center' sx={{ color: '#faf9f6'}}>GW{nextGameweekNo + 4}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {teamJSON.map(team => 
              <Next5FixturesTeam key={team.id} team={team} fixtures={next5} nextGW={nextGameweekNo}/>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>  
  )
}

export default Next5Fixtures
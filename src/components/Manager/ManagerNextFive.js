import React from 'react';
import { Box, Typography, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';
import playerJSON from '../jsonData/playerJSON';
import ManagerNext5FixturesPlayer from './ManagerNext5FixturesPlayer';

const ManagerNextFive = (props) => {

  let next5 = []

  console.log(props.currentGW)

  const filteredArray = () => {
    props.fixtures?.forEach(element => {
      if (element.event === props?.current || (element.event > props.currentGW - 1 && element.event < props.currentGW + 5)) {
        next5.push(element)
      } 
    })
  }

  filteredArray()

  const managerPicks = props.manager.picks?.picks
  const nextGW = props?.currentGW

  let playerArray = managerPicks?.map(el => {
    const found = playerJSON.find(player => player.id === el.element)
    return found
  })

  console.log(props.manager.picks)
  
    return (
    props.manager.chips ? 
    <Box sx={{
      p: '0.2em 1em 0.6em',
      m: '2vh 4vw 2vh 4vw',
      bgcolor: '#26262a',
      borderRadius: '10px'
    }}>
      <Typography variant='subtitle1' sx={{ 
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
              <TableCell align='center' sx={{ color: '#faf9f6'}}>GW{nextGW}</TableCell>
              <TableCell align='center' sx={{ color: '#faf9f6'}}>GW{nextGW + 1}</TableCell>
              <TableCell align='center' sx={{ color: '#faf9f6'}}>GW{nextGW + 2}</TableCell>
              <TableCell align='center' sx={{ color: '#faf9f6'}}>GW{nextGW + 3}</TableCell>
              <TableCell align='center' sx={{ color: '#faf9f6'}}>GW{nextGW + 4}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {playerArray?.map(player => 
              <ManagerNext5FixturesPlayer key={player.id} player={player} team={player.team} fixtures={next5} gameweek={nextGW}/>
            )}
          </TableBody>
        </Table>
      </TableContainer>      
    </Box>    
    : <Box></Box>
    )

  // return (
    // <Box sx={{
    //   p: '0.2em 1em 0.6em',
    //   m: '2vh 4vw 2vh 4vw',
    //   bgcolor: '#26262a',
    //   borderRadius: '10px'
    // }}>
    //   <Typography variant='subtitle1' sx={{ 
    //     color: '#33BB00',
    //     fontFamily: 'masque',
    //     textAlign: 'center'
    //   }}>
    //     Next Five
    //   </Typography>
    //   <TableContainer component={Paper}>
    //     <Table sx={{ backgroundColor: '#26262a'}} size='small' aria-label="table">
    //       <TableHead>
    //         <TableRow>
    //           <TableCell>

    //           </TableCell>
    //           <TableCell align='center' sx={{ color: '#faf9f6'}}>GW{nextGW}</TableCell>
    //           <TableCell align='center' sx={{ color: '#faf9f6'}}>GW{nextGW + 1}</TableCell>
    //           <TableCell align='center' sx={{ color: '#faf9f6'}}>GW{nextGW + 2}</TableCell>
    //           <TableCell align='center' sx={{ color: '#faf9f6'}}>GW{nextGW + 3}</TableCell>
    //           <TableCell align='center' sx={{ color: '#faf9f6'}}>GW{nextGW + 4}</TableCell>
    //         </TableRow>
    //       </TableHead>
    //       <TableBody>
    //         {playerArray?.map(player => 
    //           <ManagerNext5FixturesPlayer key={player.id} player={player} team={player.team} fixtures={next5} gameweek={nextGW}/>
    //         )}
    //       </TableBody>
    //     </Table>
    //   </TableContainer>      
    // </Box>
  // )
}

export default ManagerNextFive;
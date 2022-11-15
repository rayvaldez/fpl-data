import Box from '@mui/material/Box';
import React from 'react';
import Typography from '@mui/material/Typography';
import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';
import ManagerSummaryRow from './ManagerSummaryRow';

const ManagerGameweekSummary = (props) => {
  console.log(props)
  return (
    props.manager.chips ? 
    <Box sx={{
      // p: '0.2em 1em 0.6em',
      // m: '2vh 4vw 2vh 4vw',
      bgcolor: 'background.secondary',
      borderRadius: '10px'
    }}>
      <Typography variant='subtitle1' sx={{ 
        color: 'primary.main',
        fontFamily: 'masque',
        textAlign: 'center'
      }}>
        Summary
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ backgroundColor: 'background.secondary'}} size='small' aria-label="table">
          <TableHead>
            <TableRow>
              <TableCell align='center' sx={{ color: 'secondary.main'}}>Gameweek</TableCell>
              <TableCell align='center' sx={{ color: 'secondary.main'}}>Points</TableCell>
              <TableCell align='center' sx={{ color: 'secondary.main'}}>Transfers</TableCell>
              <TableCell align='center' sx={{ color: 'secondary.main'}}>Transfer Cost</TableCell>
              <TableCell align='center' sx={{ color: 'secondary.main'}}>Rank</TableCell>
              <TableCell align='center' sx={{ color: 'secondary.main'}}>Value</TableCell>
              <TableCell align='center' sx={{ color: 'secondary.main'}}>Bench Points</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.manager?.current.map(element => 
              <ManagerSummaryRow key={element.id} gameweek={element}/>
            )}
          </TableBody>
        </Table>
      </TableContainer>      
    </Box>    
    : <Box></Box>
  )
  //   <Box>
  //     <Typography variant='subtitle1' sx={{ 
  //       color: 'primary.main',
  //       fontFamily: 'masque',
  //       textAlign: 'center',
  //       p: '0.5em 0 0.5em'
  //     }}>
  //       {props.manager ? "Summary" : null}
  //     </Typography>      
  //     {props.manager && props.manager.current && props.manager.current.map(user => {
  //       return (
  //         <div key={user.event}>
  //           <Typography variant='subtitle2' sx={{ color: 'secondary.main' }}>GW{user.event} {user.points} - Bench {user.points_on_bench} - Total {user.total_points} - Rank {user.overall_rank}</Typography>
  //         </div>
  //       )
  //     })}
  //   </Box>
  // )
}

export default ManagerGameweekSummary;
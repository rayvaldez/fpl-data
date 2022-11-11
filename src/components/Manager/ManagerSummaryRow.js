import React from 'react';
import { TableRow, TableCell } from '@mui/material';

const ManagerSummaryRow = ({gameweek}) => {

  const insertDecimal = (num) => {
    return (num/10).toFixed(1);
  }

  return (
    <TableRow>
      <TableCell sx={{ color: 'secondary.main', textAlign: 'center'}}>
        {gameweek.event}
      </TableCell>
      <TableCell sx={{ color: 'secondary.main', textAlign: 'center'}}>
        {gameweek.points}
      </TableCell>
      <TableCell sx={{ color: 'secondary.main', textAlign: 'center'}}>
        {gameweek.event_transfers}
      </TableCell>
      <TableCell sx={{ color: 'secondary.main', textAlign: 'center'}}>
        {gameweek.event_transfers_cost}
      </TableCell>
      <TableCell sx={{ color: 'secondary.main', textAlign: 'center'}}>
        {gameweek.overall_rank}
      </TableCell>
      <TableCell sx={{ color: 'secondary.main', textAlign: 'center'}}>
        {insertDecimal(gameweek.value)}
      </TableCell>
      <TableCell sx={{ color: 'secondary.main', textAlign: 'center'}}>
        {gameweek.points_on_bench}
      </TableCell>
    </TableRow>
  )
}

export default ManagerSummaryRow
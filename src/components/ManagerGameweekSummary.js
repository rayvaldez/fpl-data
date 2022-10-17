import Box from '@mui/material/Box';
import React from 'react';
import Typography from '@mui/material/Typography';

const ManagerGameweekSummary = (props) => {
 
  return(
    <Box>
      {props.manager ? <Typography variant='h6' sx={{ textAlign: 'center', color: '#faf9f6', pb: '1em'}}>Summary</Typography> : null}
      {props.manager && props.manager.current && props.manager.current.map(user => {
        return (
          <div key={user.event}>
            <Typography variant='subtitle2' sx={{ color: '#faf9f6' }}>GW{user.event} {user.points} - Bench {user.points_on_bench} - Total {user.total_points} - Rank {user.overall_rank}</Typography>
          </div>
        )
      })}
    </Box>
  )
}

export default ManagerGameweekSummary;
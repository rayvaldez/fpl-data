import Box from '@mui/material/Box';
import React from 'react';
import Typography from '@mui/material/Typography';

const ManagerGameweekSummary = (props) => {
 
  return(
    <Box>
      <Typography variant='subtitle1' sx={{ 
        color: '#33BB00',
        fontFamily: 'masque',
        textAlign: 'center',
        p: '0.5em 0 0.5em'
      }}>
        {props.manager ? "Summary" : null}
      </Typography>      
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
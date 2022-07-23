import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react';

const Manager = (props) => {

  return (
    props.manager.chips ?
    <Box className="manager"
      sx={{
        height: '70vh',
        p: '0.1em 1em',
        m: '2vh 4vw 2vh 4vw',
        bgcolor: '#26262a',
        borderRadius: '10px'
      }}
    >
      {console.log(props)}
      <Grid item xs={7}>
        <Typography variant="h6" sx={{
          color: '#FAF9F6',
          mt: '1vh'
        }}>
        {props.manager.first_name} {props.manager.last_name} {props.manager.team_name}
        </Typography>
      </Grid>
      {props.manager && props.manager.current && props.manager.current.map(user => {
        return (
          <div key={user.event}>
            <h5>{user.event}.Gameweek points {user.points} - Bench Points {user.points_on_bench} - Total {user.total_points} - Rank {user.overall_rank}</h5>
          </div>
        )
      })}
    </Box>
    : <Box></Box>
  )
}

export default Manager;

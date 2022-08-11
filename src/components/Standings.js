import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import GameweekInformation from '../components/transferInformation/GameweekInformation';


import moment from 'moment';

const Standings = (props) => {

  const leaderScore = props.managers && props.managers.length > 0 ? props.managers[0].total : [];
  const leagueName = props.managers.name
  const leader = props.managers && props.managers.slice(0, 1)
  const chasers = props.managers.slice(1)

  return (
    <Box sx={{
      height: '100%',
      backgroundColor: '#151515'
      }}
    >
    {/* If props are present, render the name of the league */}
    {props.managers ?
      <Grid item md={12} key={leagueName} sx={{
        borderRadius: "10px",
        m: '2vh 4vw 2vh 4vw'        
      }}>
        <Box sx={{ color: '#FAF9F6', textAlign: 'center'}}>
            <Typography variant='h5'>{leagueName}</Typography>
        </Box>
      </Grid>
    : null}

    {/* Render the leader of the league */}
      {props.managers && leader.map(user => {
        return (
          <Grid item xs={12} key={user.id}>
            <Box sx={{ m: '0 0.9em 0.35em 0.9em', textAlign: 'center', backgroundColor: '#FAF9F6', borderRadius: '5px'}}>
              <Typography variant='button'>{moment.localeData().ordinal(user.rank_sort)}</Typography>
              <Typography variant='subtitle2' >{user.player_name}</Typography>
              <Typography variant='body1' >{user.entry_name}</Typography>
              <Typography variant='caption'>Total Points - {user.total}</Typography>
              <GameweekInformation manager={user}/>
            </Box>
          </Grid>
        )
      })}

      {/* Render the rest of the league */}
      <Box sx={{ flexGrow: 1, marginLeft: '14px', marginRight: '14px'}}>
        <Grid container spacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {props.managers && chasers.map(user => {
            return (
              <Grid item xs={6} key={user.id} sx={{
              }}>
                <Box sx={{ marginBottom: '-0.9em', backgroundColor: '#FAF9F6', borderRadius: '5px', textAlign: 'center'}}>
                  <Typography variant='button'>{moment.localeData().ordinal(user.rank_sort)}</Typography>
                  <Typography variant='subtitle2' >{user.player_name}</Typography>
                  <Typography variant='body2' >{user.entry_name}</Typography>
                  <Typography variant='caption'>Total Points - {user.total}</Typography>
                  <GameweekInformation manager={user}/>
                  {leaderScore - user.total > 0 ?
                    <Typography variant="caption" display="block" gutterBottom sx={{ color: "#dd2c00" }}>
                      Points from 1st {leaderScore - user.total}
                    </Typography>
                    : null}
                </Box>
              </Grid>
            )
          })}
        </Grid>
      </Box>

      <br/><br/><br/><br/><br></br>
    </Box>
  )
}

export default Standings;

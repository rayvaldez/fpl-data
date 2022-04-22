import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Standings = (props) => {

  const leaderScore = props.managers && props.managers.length > 0 ? props.managers[0].total : [];
  const leagueName = props.managers.name
  const leader = props.managers && props.managers.slice(0, 1)
  const chasers = props.managers.slice(1)

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


  return (
    <div className="standings">
      <Grid item md={12}>
        <Item>
          {props ? <h2>{leagueName}</h2> : null}
        </Item>
      </Grid>
      {props.managers && leader.map(user => {
        return (
          <Grid item xs={12}>
            <Item key={user.id}>
              <div className="standings-leader" key={user.id}>
                <h5>{user.rank_sort}.{user.player_name} - {user.entry_name} - Total Points - {user.total}</h5>
              </div>
            </Item>
          </Grid>
        )
      })}

      <br/>

      <Box sx={{ flexGrow: 1}}>
        <Grid container spacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {props.managers && chasers.map(user => {
            return (
              <Grid item xs={6}>
                <Item>
                  <div className="standings-chasers" key={user.id}>
                  <h5>{user.rank_sort}.{user.player_name} - {user.entry_name} - Total Points - {user.total}</h5>
                  {leaderScore - user.total > 0 ? <h6>Points from 1st {leaderScore - user.total}</h6> : null}
                  </div>
                </Item>
              </Grid>
            )
          })}
        </Grid>
      </Box>

      <br/><br/><br/>
    </div>
  )
}

export default Standings;

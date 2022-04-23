import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import moment from 'moment';

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
    {props ?
      <Grid item md={12}>
        <Item>
            <h2>{leagueName}</h2>
        </Item>
      </Grid>
    : null}
      {props.managers && leader.map(user => {
        return (
          <Grid item xs={12}>
            <Item key={user.id}>
              <div className="standings-leader" key={user.id}>
                <h3>{moment.localeData().ordinal(user.rank_sort)}</h3>
                <h5>{user.player_name} - {user.entry_name}</h5>
                <p>Total Points - {user.total}</p>
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
                  <h3>{moment.localeData().ordinal(user.rank_sort)}</h3>
                  <h5>{user.player_name} - {user.entry_name}</h5>
                  <p>Total Points - {user.total}</p>
                  <p>{leaderScore - user.total > 0 ? <p>Points from 1st {leaderScore - user.total}</p> : null}</p>
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

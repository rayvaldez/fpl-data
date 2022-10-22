import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import GameweekInformation from '../components/transferInformation/GameweekInformation';
import GameweekPicks from './GameweekPicks';
import ArrowDropUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import ArrowDropDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import CircularProgress from '@mui/material/CircularProgress';

import moment from 'moment';

const Standings = (props) => {

  console.log(props)

  const leaderScore = props.managers && props.managers.length > 0 ? props.managers[0].total : [];
  const leagueName = props.managers.name
  const leader = props.managers && props.managers.slice(0, 1)
  const chasers = props.managers.slice(1)

  const rankUporDown = (rank, lastRank) => {
    if (rank < lastRank) {
      return ( 
      <ArrowDropUpIcon fontSize='small' sx={{ color: '#008000', verticalAlign: 'top'}}/>
      )
    } else if (rank > lastRank) {
      return (
        <ArrowDropDownIcon fontSize='small' sx={{ color: '#dd2c00', verticalAlign: 'top'}}/>
      )
    } else {
      return (
        <HorizontalRuleIcon sx={{ color: '#899499', verticalAlign: 'middle'}} />
      )
    }
  }

  if (props.isLoading === false) {
    return (
      <Box sx={{
        height: '100%',
        backgroundColor: '#151515',
        pb: '1.5em'
        }}
      >
        <Box sx={{ textAlign: 'center'}}>
          <Typography variant='caption' sx={{ color: '#faf9f6'}}> Famileague 523250 - Premier Inn 522380 - LoL 798151 - PFCUK 429812</Typography>
        </Box>
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
          
          console.log(user)
          return (
            <Grid item xs={12} key={user.id}>
              <Box sx={{ m: '0 0.9em 0.35em 0.9em', textAlign: 'center', backgroundColor: '#FAF9F6', borderRadius: '5px'}}>
                <Typography variant='button'>{moment.localeData().ordinal(user.rank_sort)}</Typography>
                {/* Rank Sort here */}
                <Typography variant='subtitle2'>{user.player_name} {rankUporDown(user.rank, user.last_rank)} </Typography>
                <Typography variant='body1' >{user.entry_name}</Typography>
                {user.picks.active_chip !== null ? <Typography variant='caption' sx={{ color: '#ff781f'}}>**{user.picks.active_chip[0].toUpperCase() + user.picks.active_chip.substring(1)}**</Typography> : null}
                <Typography variant='caption'>Gameweek points  {user.picks.entry_history?.points}</Typography><br></br>
                <GameweekPicks picks={user.picks?.picks}/>
                <GameweekInformation transfers={user.transfers}/>
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
                    <Typography variant='subtitle2' >{user.player_name} {rankUporDown(user.rank, user.last_rank)}</Typography>
                    {user.picks.active_chip !== null ? <Typography variant='caption' sx={{ color: '#ff781f'}}>**{user.picks.active_chip[0].toUpperCase() + user.picks.active_chip.substring(1)}**</Typography> : null}
                    <Typography variant='body2' >{user.entry_name}</Typography>
                    <Typography variant='caption'>Gameweek points  {user.picks.entry_history?.points}</Typography><br></br>
                    <GameweekPicks picks={user.picks?.picks}/>
                    <GameweekInformation transfers={user.transfers}/>
                    {leaderScore - user.total > 0 ?
                      <Typography variant="caption" display="block" gutterBottom sx={{ color: "#dd2c00" }}>
                        Behind by {leaderScore - user.total} points
                      </Typography>
                      : null}
                  </Box>
                </Grid>
              )
            })}
          </Grid>
        </Box>
      </Box>
    )
  } else if (props.isLoading === true) {
    return (
      <Box sx={{ textAlign: 'center', height: '100%'}}>       
      <CircularProgress size='1.5em' sx={{ color: '#faf9f6', mt: '10em'}}/>
      <Typography sx={{ color: '#faf9f6'}}>Loading...</Typography>
    </Box>
    )
  } else {
    return (
      <Typography variant='caption' sx={{ color: '#faf9f6'}}> Famileague 523250 - Premier Inn 522380 - LoL 798151 - PFCUK 429812</Typography>
    )
  }
}

export default Standings;

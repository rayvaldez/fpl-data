import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import React from 'react';
import teamJSON from './jsonData/teamJSON';
import RectangleIcon from '@mui/icons-material/Rectangle';


const FixtureResults = (props) => {
  
  let homeTeam = '';
  let awayTeam = '';
  let homeScore = 0;
  let awayScore = 0;

  const getDifficultyColor = (teamDifficulty) => {
    if (teamDifficulty === 1) {
      return (
        <RectangleIcon fontSize='small' sx={{ color: '#2cba00' }}/>
      )
    } else if (teamDifficulty === 2) {
      return (
        <RectangleIcon fontSize='small' sx={{ color: '#a3ff00' }}/>
      )
    } else if (teamDifficulty === 3) {
      return (
        <RectangleIcon fontSize='small' sx={{ color: '#fff400' }}/>
      )
    } else if (teamDifficulty === 4) {
      return (
        <RectangleIcon fontSize='small' sx={{ color: '#ffa700' }}/>
      )
    } else if (teamDifficulty === 5) {
      return (
        <RectangleIcon fontSize='small' sx={{ color: '#fa2500' }}/>
      )
    }
  }

  // eslint-disable-next-line no-unused-vars
  const getHomeTeam = teamJSON && teamJSON.forEach(element => {
    if (element.id === props?.fixtures?.team_h) 
      homeTeam = element.name
  })

  // eslint-disable-next-line no-unused-vars
  const getAwayTeam = teamJSON && teamJSON.forEach(element => {
    if (element.id === props.fixtures?.team_a) 
      awayTeam = element.name
  })

  let getScore = () => {
    if (props.fixtures?.stats.length) {
      
      props.fixtures.stats[0].a.forEach(element => {
        awayScore = awayScore + element.value
      })

      props.fixtures.stats[0].h.forEach(element => {
        homeScore = homeScore + element.value
      })

      props.fixtures.stats[2].a.forEach(element => {
        homeScore = homeScore +element.value
      })

      props.fixtures.stats[2].h.forEach(element => {
        awayScore = awayScore +element.value
      })
    }
  }

  getScore()
  
  const time = new Date(props.fixtures?.kickoff_time).toLocaleTimeString('en-GB',
  { timeStyle: 'short', hour12: false, timeZone: 'Europe/London'});
  
  const timeOrResult = () => {
    if (props.fixtures?.stats.length) {
      return (
        <Typography variant='subtitle2'>
          {homeScore} - {awayScore}
        </Typography>
      )
    } else {
      return (
        <Typography variant='caption' sx={{ border: '1px solid', padding: '2px' }}>
          {time}
        </Typography>        
      )
    }
  }

  return (
    <Grid container sx={{
      color: '#FAF9F6',
      textAlign: 'center'
    }}
    >
      <Grid item xs sx={{ textAlign: 'right' }}>
        {homeTeam}
      </Grid>
      <Grid>
        {getDifficultyColor(props.fixtures.team_a_difficulty)}
      </Grid>
      <Grid item xs={2}> 
      {timeOrResult()}
      </Grid>
      <Grid >
        {getDifficultyColor(props.fixtures.team_h_difficulty)}
      </Grid>  
      <Grid item xs sx={{ textAlign: 'left' }}>
        {awayTeam}
      </Grid>
    </Grid>
  )
}

export default FixtureResults;
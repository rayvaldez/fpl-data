import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import React from 'react';
import TimeVResults from './TimeVResults';


const LiveScore = (props) => {

  // Find next gameweek
  const findNextGameweek = props.fixtures ? props.fixtures.find(element => element.finished === false) : null

  // Remember to revert this code!!!
  const gameweek = props.fixtures && findNextGameweek.event -1
  
  // filteredArray contains all fixtures of gameweek
  let filteredArray = []
  
  // nestedArray should contain nested fixtures separated by date
  let nestedArray = []
  
  // loop through props and filter gameweek fixtures
  const filterGameweek = props.fixtures && props.fixtures.forEach(element => {
    if (element.event === gameweek) {
      filteredArray.push(element);
    }
  });

  const fixtureDate = filteredArray.length && filteredArray[0].kickoff_time
  
  // create first nested array with first fixture
  const addFirstFixtureToNestedArray = Object.assign(nestedArray, {[0]: [filteredArray[0]]})
  
  const gameweekDay = new Date(fixtureDate).toLocaleDateString('en',
  {day: 'numeric'}
  )
  
  // Create an array of fixtures minus the first
  const [, ...fixturesMinusFirst] = filteredArray

  let ai = 0
  let i = 1
  let i2 = 0
  let check = 0
  let check2 = 0 

  // Map through the fixtures and create an array based on fixture date
  const filterFixtures = fixturesMinusFirst.length && fixturesMinusFirst.map(fixture => {
    const gameDate = new Date(fixture.kickoff_time).toLocaleDateString('en',
    {day: 'numeric'}
    )
    
    if (parseInt(gameDate) === parseInt(gameweekDay)) {
      nestedArray[ai][i] = fixture
      i ++
    } else if (parseInt(gameDate) === parseInt(gameweekDay) + 1) {
      if (check === 0) {
        ai ++
        Object.assign(nestedArray, {[ai]: [fixture]})
        check ++
        i2 ++
      } else {
      nestedArray[ai][i2] = fixture
      i2 ++
      }
    } else {
      if (check2 === 0) {
        ai ++
        Object.assign(nestedArray, {[ai]: [fixture]})
        check2 ++
        i2 ++
      } else {
        nestedArray[ai][i2] = fixture
        i2 ++
      }
    }
  });
  
  return(
    <Box sx={{
      p: '0.2em 1em 0.6em',
    m: '2vh 4vw 2vh 4vw',
    bgcolor: '#26262a',
    borderRadius: '10px'
    }}>
      <Grid container sx={{
        color: '#faf9f6',
        gridGap: '5px',
        ml: '2.5em',
        width: '100%'
      }}>
        <Grid item xs>
          <Typography variant='subtitle2' sx={{ 
            color: '#33BB00',
            fontFamily: 'masque',
            textAlign: 'right'
          }}>
            Gameweek
          </Typography>
        </Grid>
        <Grid item xs>
          <Typography variant='subtitle2' sx={{ 
            color: '#33BB00',
            textAlign: 'left',
            fontSize: '0.95rem',
            marginRight: '1em',
            fontWeight: '700'
          }}>
            {gameweek}
          </Typography>
        </Grid>
      </Grid>  
      {nestedArray.length && nestedArray.map(fixtureArray => 
        <TimeVResults key={fixtureArray[0]?.code} fixtures={fixtureArray} />
      )}
    </Box>
  )
}

export default LiveScore;


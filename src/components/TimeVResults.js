import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import React from 'react';
import FixtureResults from './FixtureResults';
import CircularProgress from '@mui/material/CircularProgress';


const TimeVResults = (props) => {
  const fixtures = props && props.fixtures
  const fixtureDate = fixtures[0]?.kickoff_time

  const date = new Date(fixtureDate).toLocaleDateString('en',
  { weekday: 'long', month: 'long', day: 'numeric'}
  )

  if (fixtureDate) {
    return (
      <Box>
        <Typography variant='subtitle2' sx={{ color: 'secondary.main', textAlign: 'center' }}>
          {date}
        </Typography>
        <Box>
          {fixtures.map(fixture =>
            <FixtureResults key={fixture?.code} fixtures={fixture} />
          )}
        </Box>
      </Box>
    )
  } else  {
    return (
      <Box sx={{ textAlign: 'center'}}>
        <CircularProgress size='1.5em' sx={{ color: 'secondary.main', alignItems: 'center'}}/>
      </Box>
    ) 
  }
}

export default TimeVResults;
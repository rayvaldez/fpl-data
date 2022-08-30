import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import React from 'react';
import FixtureResults from './FixtureResults';

const TimeVResults = (props) => {
  const fixtures = props && props.fixtures
  const fixtureDate = fixtures[0]?.kickoff_time

  const date = new Date(fixtureDate).toLocaleDateString('en',
  { weekday: 'long', month: 'long', day: 'numeric'}
  )

  return (
    <Box>
      <Typography variant='subtitle2' sx={{ color: '#faf9f6', textAlign: 'center' }}>
        {date}
      </Typography>
      <Box>
        {fixtures.map(fixture =>
          <FixtureResults key={fixture?.code} fixtures={fixture} />
        )}
      </Box>
    </Box>
  )
}

export default TimeVResults;
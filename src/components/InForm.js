import React from 'react'
import Box from '@mui/material/Box'



const InForm = ({fixtures, nextGW}) => {

  let last5 = [];
  
  const filter5 = () => {
    fixtures?.forEach(fixture => {
      if (fixture.event < nextGW && (fixture.event > nextGW - 5)) {
      last5?.push(fixture)
      }
    })
  }

  filter5()

  // filter5 is now an array of the last 5 gameweeks
  // Iterate through filter5.stats.bps and create a new array
  // This new array will contain each element present in filter5, along with the score from each gameweek
  // for average we can reduce the gameweek scores and divide by number of gameweeks to find the average and sort
  // Mode is the most common number in the array
  // Median is the middle number of the array


  return (
    <Box sx={{
      p: '0.2em 1em 0.6em',
      m: '2vh 4vw 2vh 4vw',
      bgcolor: '#26262a',
      borderRadius: '10px'
    }}>
      In Form
    </Box>
  )
}

export default InForm
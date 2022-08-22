import { Box, Typography } from '@mui/material';
import React from 'react';

const LiveScore = () => {

  return(
    <Box sx={{
      p: '0.2em 1em 0.6em',
      m: '2vh 4vw 2vh 4vw',
      bgcolor: '#26262a',
      borderRadius: '10px',
      height: '10vh'
    }}>
      <Typography sx={{ color: '#faf9f6', textAlign: 'center' }}>
        Live Scores
      </Typography>
    </Box>
  )
}

export default LiveScore;


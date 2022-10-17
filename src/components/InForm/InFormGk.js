import Typography from '@mui/material/Typography';
import React from 'react';
import Box from '@mui/material/Box';

const InFormGk = ({goalkeeper}) => {
  return (
    <Box>
      <Typography sx={{
        color: '#faf9f6',
        textAlign: 'center',
        pt: '0.3em'
      }}>
        {goalkeeper[0]?.web_name}
      </Typography>
    </Box>
  )
}

export default InFormGk
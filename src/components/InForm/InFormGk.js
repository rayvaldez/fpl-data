import Typography from '@mui/material/Typography';
import React from 'react';
import Box from '@mui/material/Box';

const InFormGk = ({goalkeeper}) => {
  return (
    <Box>
      <Typography sx={{ 
        color: '#faf9f6',
        border: 'solid 1px #faf9f6',
        borderRadius: '4px',
        p: '0 4px 0 4px' 
      }}>
        {goalkeeper[0]?.web_name}
      </Typography>
    </Box>
  )
}

export default InFormGk
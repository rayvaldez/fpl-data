import Typography from '@mui/material/Typography';
import React from 'react';
import Box from '@mui/material/Box';

const InFormMid = ({midfielder}) => {
  return (
    <Box component='div' sx={{ display: 'inline-flex' }}>
      <Typography sx={{
        color: '#faf9f6',
        textAlign: 'center',
        border: 'solid 1px #faf9f6',
        borderRadius: '4px',
        p: '0 2px 0 2px'
      }}>
        {midfielder?.web_name}
      </Typography>
    </Box>
  )
}

export default InFormMid
import Typography from '@mui/material/Typography';
import React from 'react';
import Box from '@mui/material/Box';

const InFormMid = ({midfielder}) => {
  return (
    <Box component='div' sx={{ display: 'inline-flex', pl: '1em', pr: '1em'}}>
      <Typography sx={{
        color: '#faf9f6',
        textAlign: 'center'
      }}>
        {midfielder?.web_name}
      </Typography>
    </Box>
  )
}

export default InFormMid
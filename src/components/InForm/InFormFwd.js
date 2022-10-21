import Typography from '@mui/material/Typography';
import React from 'react';
import Box from '@mui/material/Box';

const InFormFwd = ({forward}) => {
  return (
    <Box component='div' sx={{ display: 'inline-flex', pl: '1.5em', pr: '1.5em'}}>
      <Typography sx={{
        color: '#faf9f6',
        textAlign: 'center'
      }}>
        {forward?.web_name}
      </Typography>
    </Box>
  )
}

export default InFormFwd
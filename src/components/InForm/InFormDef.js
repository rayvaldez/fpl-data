import Typography from '@mui/material/Typography';
import React from 'react';
import Box from '@mui/material/Box';

const InFormDef = ({defender}) => {
  return (
    <Box component='div' sx={{ display: 'inline-flex', pl: '0.5em', pr: '0.5em'}}>
      <Typography sx={{
        color: '#faf9f6',
        textAlign: 'center'
      }}>
        {defender?.web_name}
      </Typography>
    </Box>
  )
}

export default InFormDef
import Typography from '@mui/material/Typography';
import React from 'react';
import Box from '@mui/material/Box';

const InFormDef = ({defender}) => {
  return (
    <Box component='div' sx={{ display: 'inline-flex', pt: '1.8em', pl: '0.6em', pr: '0.6em'}}>
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
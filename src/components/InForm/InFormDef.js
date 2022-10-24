import Typography from '@mui/material/Typography';
import React from 'react';
import Box from '@mui/material/Box';

const InFormDef = ({defender}) => {
  return (
    <Box component='div' sx={{ display: 'inline-flex', pl: '0.5em', pr: '0.5em'}}>
      <Typography sx={{
        color: '#faf9f6',
        textAlign: 'center',
        border: 'solid 1px #faf9f6',
        borderRadius: '4px',
        p: '0 4px 0 4px'
      }}>
        {defender?.web_name}
      </Typography>
    </Box>
  )
}

export default InFormDef
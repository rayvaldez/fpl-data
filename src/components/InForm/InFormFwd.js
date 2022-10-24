import Typography from '@mui/material/Typography';
import React from 'react';
import Box from '@mui/material/Box';

const InFormFwd = ({forward}) => {
  return (
    <Box component='div' sx={{ display: 'inline-flex', pl: '1.5em', pr: '1.5em'}}>
      <Typography sx={{
        color: '#faf9f6',
        textAlign: 'center',
        border: 'solid 1px #f0f0f0',
        borderRadius: '4px',
        p: '0 4px 0 4px'
      }}>
        {forward?.web_name}
      </Typography>
    </Box>
  )
}

export default InFormFwd
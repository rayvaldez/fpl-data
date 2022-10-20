import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography'
import React from 'react'
import playerJSON from './jsonData/playerJSON'
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';


const DreamTeamPlayer = (props) => {
  
  const player = props?.player && playerJSON.find(player => props.player.element === player.id)

  const costString = (cost) => {
    if (cost?.toString().length < 3) {
      return `${Number(String(cost).slice(0,1))}.${Number(String(cost).slice(1, 2))}` 
    } else {
      return `${Number(String(cost).slice(0,2))}.${Number(String(cost).slice(0,0))}`
    }
  }

  const item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));  

  return (
    <Grid container columnSpacing={{ xs: 1, sm: 1, m: 2 }}>
      <Grid item xs={3}>
        <Typography variant='body2' sx={{ 
        color: '#faf9f6' 
        }}>
          {player?.web_name}
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography variant='body2' sx={{ 
        color: '#faf9f6' 
        }}>
          £{costString(player?.now_cost)}
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography variant='body2' sx={{ 
        color: '#faf9f6' 
        }}>
          {player?.selected_by_percent}%
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography variant='body2' sx={{ 
        color: '#faf9f6' 
        }}>
          {player?.dreamteam_count}
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography variant='body2' sx={{ 
        color: '#faf9f6' 
        }}>
          {props?.player.points}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default DreamTeamPlayer
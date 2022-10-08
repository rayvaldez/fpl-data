import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography'
import React from 'react'
import playerJSON from './jsonData/playerJSON'


const DreamTeamPlayer = (props) => {
  
  const player = props?.player && playerJSON.find(player => props.player.element === player.id)

  const costString = (cost) => {
    if (cost.toString().length < 3) {
      return `${Number(String(cost).slice(0,1))}.${Number(String(cost).slice(1, 2))}` 
    } else {
      return `${Number(String(cost).slice(0,2))}.${Number(String(cost).slice(0,0))}`
    }
  }

  return (
    <Grid container columnSpacing={{ xs: 1, sm: 1, m: 2 }}>
      <Grid xs={3}>
        <Typography variant='body2' sx={{ 
        color: '#faf9f6' 
        }}>
          {player.web_name}
        </Typography>
      </Grid>
      <Grid xs={2}>
        <Typography variant='body2' sx={{ 
        color: '#faf9f6' 
        }}>
          £{costString(player.now_cost)}
        </Typography>
      </Grid>
      <Grid xs={3}>
        <Typography variant='body2' sx={{ 
        color: '#faf9f6' 
        }}>
          {player.selected_by_percent}%
        </Typography>
      </Grid>
      <Grid xs={2}>
        <Typography variant='body2' sx={{ 
        color: '#faf9f6' 
        }}>
          {player.dreamteam_count}
        </Typography>
      </Grid>
      <Grid xs={2}>
        <Typography variant='body2' sx={{ 
        color: '#faf9f6' 
        }}>
          {props.player.points}
        </Typography>
      </Grid>
    </Grid>
  )

  // if (player) {
  //   return (
  //     <Box sx={{
  //       p: '0.2em 1em 0.6em',
  //       m: '2vh 4vw 2vh 4vw',
  //       bgcolor: '#26262a',
  //       borderRadius: '10px'
  //     }}>
  //       <Typography variant='subtitle2' sx={{ 
  //         color: '#33BB00',
  //         fontFamily: 'masque',
  //         textAlign: 'center'
  //       }}>
  //         Dream Team
  //       </Typography>
  //       <Typography variant='subtitle1' sx={{ 
  //         color: '#faf9f6', 
  //         textAlign: 'center' 
  //       }}>
  //         Player of the Week
  //       </Typography>
  //       <Box sx={{ 
  //         display: 'block',
  //         ml: 'auto',
  //         mr: 'auto',
  //         width: '33%'
  //     }}>
  //         <img src={`https://resources.premierleague.com/premierleague/photos/players/110x140/p${parseInt(player.photo.substring(0,6))}.png`}
  //           alt={player.web_name}
  //           width='120em'
  //         />
  //       </Box>
  //       <Typography variant='subtitle2' sx={{ 
  //         color: '#faf9f6', 
  //         textAlign: 'center' 
  //       }}>
  //         {player.web_name} <br></br>
  //         {props.team.top_player.points} Points <br></br>
  //         More players to follow...
  //       </Typography>
  //     </Box>
  //   )
  // } else {
  //   return (
  //     null
  //   )
  // }
}

export default DreamTeamPlayer
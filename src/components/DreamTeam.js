import DreamTeamPlayer from './DreamTeamPlayer';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react';
import playerJSON from './jsonData/playerJSON';
import Grid from '@mui/material/Grid';
import Tooltip from '@mui/material/Tooltip';
import CircularProgress from '@mui/material/CircularProgress';

const DreamTeam = (props) => {

  const previousGW = props?.currentGW - 1
  
  let [ dreamTeam, setDreamTeam] = useState(null)
  
  useEffect(() => {
    fetch(`https://ancient-ocean-21689.herokuapp.com/https://fantasy.premierleague.com/api/dream-team/${previousGW}/`)
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json())
    .then(data => setDreamTeam(data))
  },[previousGW])

  const topPlayer = playerJSON.find(player => dreamTeam?.top_player.id === player.id)

  const costString = (cost) => {
    if (cost.toString().length < 3) {
      return `${Number(String(cost).slice(0,1))}.${Number(String(cost).slice(1, 2))}` 
    } else {
      return `${Number(String(cost).slice(0,2))}.${Number(String(cost).slice(0,0))}`
    }
  }

  if (topPlayer) {
    return (
      <Box sx={{
        p: '0.2em 1em 0.6em',
        m: '2vh 4vw 2vh 4vw',
        bgcolor: '#26262a',
        borderRadius: '10px'
      }}>
        <Typography variant='subtitle2' sx={{ 
          color: '#33BB00',
          fontFamily: 'masque',
          textAlign: 'center'
        }}>
          Dream Team
        </Typography>
        <Typography variant='subtitle1' sx={{ 
          color: '#faf9f6', 
          textAlign: 'center' 
        }}>
          Player of the Week
        </Typography>
        <Box sx={{ 
          display: 'block',
          ml: 'auto',
          mr: 'auto',
          width: '33%'
      }}>
          <img src={`https://resources.premierleague.com/premierleague/photos/players/110x140/p${parseInt(topPlayer.photo.substring(0,6))}.png`}
            alt={topPlayer.web_name}
            width='120em'
          />
        </Box>
        <Typography variant='subtitle2' sx={{ 
          color: '#faf9f6', 
          textAlign: 'center' 
        }}>
          {topPlayer.web_name} <br></br>
          {dreamTeam.top_player.points} Points <br></br>
          £{costString(topPlayer.now_cost)}
        </Typography>
        <Grid container columnSpacing={{ xs: 1, sm: 1, m: 2 }}>
          <Grid xs={3}>
            <Typography variant='caption' sx={{ color: '#faf9f6'}}>
              Player
            </Typography>
          </Grid>
          <Grid xs={2}>
            <Typography variant='caption' sx={{ color: '#faf9f6'}}>
              Cost
            </Typography>
          </Grid>
          <Grid xs={3}>
            <Typography variant='caption' sx={{ color: '#faf9f6'}}>
              Owned By
            </Typography>
          </Grid>
          <Grid xs={2}>
            <Tooltip title="Dream Team Count">
              <Typography variant='caption' sx={{ color: '#faf9f6'}}>
                DTC
              </Typography>
            </Tooltip>
          </Grid>
          <Grid xs={2}>
            <Tooltip title="Gameweek Points">
              <Typography variant='caption' sx={{ color: '#faf9f6'}}>
                GWP
              </Typography>
            </Tooltip>
          </Grid>

        </Grid>
        {dreamTeam.team.map(player => 
          <DreamTeamPlayer key={player.element} player={player} />
          )
        }
      </Box>
    )
  } else {
    return (
      <Box sx={{ textAlign: 'center'}}>
        <Typography sx={{ color: '#faf9f6'}}>LOADING</Typography>
        <CircularProgress size='1.5em' sx={{ color: '#faf9f6', alignItems: 'center'}}/>
      </Box>
    ) 
  }
  
}

export default DreamTeam;
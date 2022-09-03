import Typography from '@mui/material/Typography';
import playerJSON from './jsonData/playerJSON';
import React, { useState, useEffect } from 'react';

const GameweekPicks = (props) => {
  const [picks, setPicks] = useState()
  const [captain, setCaptain] = useState()

  useEffect(() => {
    if(props.picks) {
      setPicks(props.picks)
    }
  }, [props.picks])

  // console.log(Object.entries(props.picks).find(([key, value]) => key === 'is_captain' && value === true))
  useEffect(() => {
    if (Array.isArray(picks)) {
      setCaptain(picks.find(e => e.is_captain === true))
    }

  }, [picks])

  const captainName = playerJSON.find(player => captain?.element === player.id)
  
  return (
    <Typography variant='caption'>(C) {captainName?.web_name} </Typography>
  )
}

export default GameweekPicks
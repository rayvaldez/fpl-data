import { Box, Typography } from "@mui/material";
import React, { useEffect, useState} from "react";

const DeadlineTimer = () => {

  const calculateDeadline = () => {
    let year = new Date().getFullYear()
    
    let difference = +new Date(`${year}-08-13 11:00:00`) - +new Date();
    
    let timeLeft = {};
    
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
  
    return timeLeft;
  }

  
  const [timeLeft, setTimeLeft] = useState(calculateDeadline());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateDeadline());
    }, 1000);

    return () => clearTimeout()
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <Box sx={{ 
      backgroundImage: 'linear-gradient(to bottom, #33BB00, #272727)',
      borderRadius: '6px',
      m: '0.3em 1em 1.2em 1em',
      textAlign: 'center',
      color: '#FAF9F6',
      p: '0.8em'
      }}
    >
      <Typography variant='h5'>
        GAMEWEEK 2 DEADLINE
      </Typography>
      <Typography variant="subtitle2">
        {timerComponents.length ? timerComponents : <span>Deadline Passed!</span>}
      </Typography>
    </Box>
  )
}

export default DeadlineTimer;
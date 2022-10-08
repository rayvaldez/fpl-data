import { Box, Typography } from "@mui/material";
import React, { useEffect, useState} from "react";

const DeadlineTimer = (props) => {

  const nextDeadline = props.nextGW.deadline_time

  const calculateDeadline = () => {
    let year = new Date().getFullYear()
    
    // let difference = +new Date(`${year}-10-08 13:30:00`) - +new Date();
    let difference = +new Date(nextDeadline) - +new Date();
    
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
      <span key={interval}>
        {timeLeft[interval]} {interval} {" "}
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
      <Typography sx={{ fontFamily: 'masque' }}>
        GAMEWEEK DEADLINE
      </Typography>
      <Typography variant="subtitle2">
        {timerComponents.length ? timerComponents : <span>Deadline Passed!</span>}<br></br>
      </Typography>
    </Box>
  )
}

export default DeadlineTimer;
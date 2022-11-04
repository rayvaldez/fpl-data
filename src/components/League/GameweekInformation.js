import React, { useState, useEffect } from 'react';
import playerJSON from '../jsonData/playerJSON';
import Typography from '@mui/material/Typography';

const GameweekInformation = (props) => {

  const [transfers, setTransfers] = useState()

  useEffect(() => {
    if (props.transfers) {
      setTransfers(props.transfers)
    }
  }, [props.transfers])

  return (
    <div>
      {transfers?.length ? transfers.map(el => {
        let playerIn = playerJSON.find(player => el.element_in === player.id)
        let playerOut = playerJSON.find(player => el.element_out === player.id)

        return (
          <div key={el.time}>
            <Typography variant="caption" sx={{ color: '#dd2c00'}}>{playerOut.web_name}</Typography> {'>'} <Typography variant="caption" sx={{ color: '#008000'}}>{playerIn?.web_name}</Typography>
          </div>
        )
      }) : null}
    </div>
  )
}

export default GameweekInformation;

import React from 'react';
import PlayerElementJSON from '../jsonData/PlayerElementJSON';

const GameweekInformation = (props) => {
  /*Take transfer information from props and show each Managers transfers */
  const transfers = props && props.manager.transfers

  return (
    <div>
      {transfers?.map(el => {
        let playerIn = PlayerElementJSON.find(player => el.element_in === player.id)
        let playerOut = PlayerElementJSON.find(player => el.element_out === player.id)

        return (
            <p>{playerOut?.web_name} > {playerIn?.web_name}</p>
        )
      })}
    </div>
  )
}

export default GameweekInformation;

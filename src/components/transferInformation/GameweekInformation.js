import React from 'react';
import PlayerElementJSON from '../jsonData/PlayerElementJSON';
// import TBTransferData from '../jsonData/TBTransferData';

const GameweekInformation = (props) => {

  let transferData

  if (props.manager && props.manager.transfers) {
    const transfers = props.manager.transfers
    const latestGameweek = props.manager.points.length
    const latestTransfers = transfers.filter(el => el.event === latestGameweek)
    const transferInfo = []
    const getInfo = latestTransfers.forEach(el => {
      let plIn = PlayerElementJSON.find(player => el.element_in === player.id)
      let plOut = PlayerElementJSON.find(player => el.element_out === player.id)
      let transfer = {}
      transfer['transferIn'] = plIn.web_name
      transfer['transferOut'] = plOut.web_name
      transferInfo.push(transfer)
    })

  transferData =
    <div>
      <h5>Latest Transfers</h5>
      {transferInfo.map(transfer => {
        return (
          <div>
            <p>{transfer.transferOut} > {transfer.transferIn}</p>
          </div>
        )
      })}
    </div>

  } else {
    transferData = null
  }

  return (
    <div>
      {transferData}
    </div>
  )
}

export default GameweekInformation;

import React from 'react';

const Standings = (props) => {

  return (
    <div className="standings">
      {props.managers.results.map(user => {
        return (
          <div key={user.id}>
            <h5>{user.player_name} - {user.entry_name}</h5>
          </div>
        )
      })}
    </div>
  )
}

export default Standings;

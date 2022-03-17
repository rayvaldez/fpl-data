import React from 'react';

const Standings = (props) => {

  return (
    <div className="standings">
      {props.managers && props.managers.results.map(user => {
        return (
          <div key={user.id}>
            <h5>{user.rank_sort}.{user.player_name} - {user.entry_name} - Total Points - {user.total}</h5>
          </div>
        )
      })}
    </div>
  )
}

export default Standings;

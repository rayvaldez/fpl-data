import React from 'react';

const Standings = (props) => {

  const leaderScore = props.managers && props.managers.length > 0 ? props.managers[0].total : [];
  const leagueName = props.managers.name

  return (
    <div className="standings">
      {props ? <h2>{leagueName}</h2> : null}
      {props.managers && props.managers.map(user => {
        return (
          <div key={user.id}>
            <h5>{user.rank_sort}.{user.player_name} - {user.entry_name} - Total Points - {user.total}</h5>
            {leaderScore - user.total > 0 ? <h6>Points from 1st {leaderScore - user.total}</h6> : null}
          </div>
        )
      })}
    </div>
  )
}

export default Standings;

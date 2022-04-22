import React from 'react';

const Standings = (props) => {

  const leaderScore = props.managers && props.managers.length > 0 ? props.managers[0].total : [];
  const leagueName = props.managers.name
  const leader = props.managers && props.managers.slice(0, 1)
  const chasers = props.managers.slice(1)


  return (
    <div className="standings">
      {props ? <h2>{leagueName}</h2> : null}
      {props.managers && leader.map(user => {
        return (
          <div className="standings-leader" key={user.id}>
            <h5>{user.rank_sort}.{user.player_name} - {user.entry_name} - Total Points - {user.total}</h5>
          </div>
        )
      })}
      {props.managers && chasers.map(user => {
        return (
          <div className="standings-chasers" key={user.id}>
            <h5>{user.rank_sort}.{user.player_name} - {user.entry_name} - Total Points - {user.total}</h5>
            {leaderScore - user.total > 0 ? <h6>Points from 1st {leaderScore - user.total}</h6> : null}
          </div>
        )
      })}
    </div>
  )
}

export default Standings;

import React from 'react';

const Manager = (props) => {

  return (
    <div className="manager">
      <h3>{props.manager.first_name} {props.manager.last_name} {props.manager.team_name}</h3>
      {props.manager && props.manager.current && props.manager.current.map(user => {
        return (
          <div key={user.event}>
            <h5>{user.event}.Gameweek points {user.points} - Bench Points {user.points_on_bench} - Total {user.total_points} - Rank {user.overall_rank}</h5>
          </div>
        )
      })}
    </div>
  )
}

export default Manager;

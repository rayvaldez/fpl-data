import React from 'react';

const Manager = (props) => {

  return (
    <div className="manager">
    {props.manager && props.manager.length > 0 && props.manager.current.map(user => {
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

export function fetchManager(managerId) {

  let managerInfo = {}
  let managerPicks = {}
  let managerHistory = {}

  return (dispatch) => {
    fetch(`https://ancient-ocean-21689.herokuapp.com/https://fantasy.premierleague.com/api/entry/${managerId}/`)
      .then(res => (res.ok ? res : Promise.reject(res)))
      .then(res => res.json())
      .then(manager => {
        managerInfo = manager
        
        const fetchManagerPicks = async (managerId) => {
          const request = await fetch(`https://ancient-ocean-21689.herokuapp.com/https://fantasy.premierleague.com/api/entry/${managerId}/event/1/picks/`)
          console.log(request)
          return request
        }
  
        fetchManagerPicks(managerId)
        .then(res => res.json())
        .then(data => {
          console.log(data)
          managerPicks = data
        })
          
        return fetch(`https://ancient-ocean-21689.herokuapp.com/https://fantasy.premierleague.com/api/entry/${managerId}/history/`)
      }).then(res => (res.ok ? res : Promise.reject(res)))
        .then(res => res.json())
        .then(data => {
          managerHistory = data

          managerHistory.picks = managerPicks
          managerHistory.info = managerInfo
          managerHistory.first_name = managerInfo.player_first_name
          managerHistory.last_name = managerInfo.player_last_name
          managerHistory.team_name = managerInfo.name
        })
        .then(() => dispatch({
          type: 'FETCH_MANAGER',
          payload: managerHistory
        }));
  };
}

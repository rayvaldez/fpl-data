export function fetchLeague(leagueId) {

  let leagueManagers = {}

  return (dispatch) => {
    fetch(`https://ancient-ocean-21689.herokuapp.com/https://fantasy.premierleague.com/api/leagues-classic/${leagueId}/standings/`)
      .then(res => (res.ok ? res : Promise.reject(res)))
      .then(res => res.json())
      .then(data => {
        leagueManagers = data.standings.results
        leagueManagers.name = data.league.name
        let i = 0

        leagueManagers.forEach((manager => {
          fetch(`https://ancient-ocean-21689.herokuapp.com/https://fantasy.premierleague.com/api/entry/${manager.entry}/history/`)
          .then(res => (res.ok ? res : Promise.reject(res)))
          .then(res => res.json())
          .then(data => {
            leagueManagers[i].points = data.current
            i++
          })
        }))
      }).then(() => dispatch({
        type: 'FETCH_MANAGERS',
        payload: leagueManagers
      }));
  };
}

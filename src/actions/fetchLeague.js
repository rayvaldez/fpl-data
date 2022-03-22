export function fetchLeague() {

  return (dispatch) => {
    fetch(`https://ancient-ocean-21689.herokuapp.com/https://fantasy.premierleague.com/api/leagues-classic/${leagueId}/standings/`)
      .then(res => (res.ok ? res : Promise.reject(res)))
      .then(res => res.json())
      .then(managers => dispatch({
        type: 'FETCH_MANAGERS',
        payload: managers
      }));
  };
}

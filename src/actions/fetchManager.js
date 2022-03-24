export function fetchManager(managerId) {

  return (dispatch) => {
    fetch(`https://ancient-ocean-21689.herokuapp.com/https://fantasy.premierleague.com/api/entry/${managerId}/history/`)
      .then(res => (res.ok ? res : Promise.reject(res)))
      .then(res => res.json())
      .then(manager => dispatch({
        type: 'FETCH_MANAGER',
        payload: manager
      }));
  };
}

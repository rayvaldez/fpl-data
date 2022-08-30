export function fetchInformation() {

  let information = {}

  let api1 = 'https://ancient-ocean-21689.herokuapp.com/https://fantasy.premierleague.com/api/bootstrap-static/';
  let api2 = 'https://ancient-ocean-21689.herokuapp.com/https://fantasy.premierleague.com/api/fixtures/';
  
  return (dispatch) => {

    let promise1 = fetch(api1)
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json())
    .then(data => {
      information.general = data
      return data
    });

    let promise2 = fetch(api2)
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json())
    .then(data => {
      information.fixtures = data
      return data
    });

    Promise.all([promise1, promise2])
    .then(() => dispatch({
      type: 'FETCH_INFORMATION',
      payload: information
    }));
  };
}
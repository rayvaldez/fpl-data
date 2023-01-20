export function fetchInformation() {

  let information = {};
  let api1 = '/api/bootstrap-static/';
  let api2 = '/api/fixtures/';
  // api3 has the gameweek hardcoded, work on a fix!
  // let api3 = `https://ancient-ocean-21689.herokuapp.com/https://fantasy.premierleague.com/api/dream-team/${nextGWID}/`;
  
  return (dispatch) => {

    let promise1 = fetch(api1)
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json())
    .then(data => {
      information.general = data;
      const reverseEvents = data.events.slice().reverse()
      const previousGW = reverseEvents.find(element => element.finished === true);
      information.currentGW = previousGW.id + 1;
      information.nextGW = previousGW.id + 1;
      information.previousGW = previousGW.id;
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
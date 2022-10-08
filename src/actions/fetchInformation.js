export function fetchInformation() {

  let information = {};
  let currentGW;
  let api1 = 'https://ancient-ocean-21689.herokuapp.com/https://fantasy.premierleague.com/api/bootstrap-static/';
  let api2 = 'https://ancient-ocean-21689.herokuapp.com/https://fantasy.premierleague.com/api/fixtures/';
  // api3 has the gameweek hardcoded, work on a fix!
  // let api3 = `https://ancient-ocean-21689.herokuapp.com/https://fantasy.premierleague.com/api/dream-team/${nextGWID}/`;
  
  return (dispatch) => {

    let promise1 = fetch(api1)
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json())
    .then(data => {
      currentGW = data.events.find(element => element.is_current === true);
      information.general = data;
      information.currentGW = currentGW.id;
      information.nextGW = currentGW.id + 1;
      information.previousGW = currentGW.id - 1;
      return data
    });

    let promise2 = fetch(api2)
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json())
    .then(data => {
      information.fixtures = data
      return data
    });
    // .then(() => {
      //   fetch(`https://ancient-ocean-21689.herokuapp.com/https://fantasy.premierleague.com/api/dream-team/${nextGWID - 1}/`)
      //   .then(res => (res.ok ? res : Promise.reject(res)))
      //   .then(res => res.json())
      //   .then(data => {
        //     console.log('Promise 3')
        //     information.dreamTeam = data
        //     return data
        //   });      
        // }) 
    Promise.all([promise1, promise2])
    .then(() => dispatch({
      type: 'FETCH_INFORMATION',
      payload: information
    }));
  };
}
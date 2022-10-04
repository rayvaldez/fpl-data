export function fetchLeague(leagueId, currentGW) {

  let leagueManagers = {}
  let latestGameweek;

  return (dispatch) => {
    dispatch({ type: 'FETCHING_MANAGERS'});

    fetch(`https://ancient-ocean-21689.herokuapp.com/https://fantasy.premierleague.com/api/leagues-classic/${leagueId}/standings/`)
      .then(res => (res.ok ? res : Promise.reject(res)))
      .then(res => res.json())
      .then(data => {
        leagueManagers = data.standings.results
        leagueManagers.name = data.league.name
        return leagueManagers
      }).then(leagueManagers => {

        const fetchManagerInfo = async (url) => {
          const managerInfo = await fetch(url)
          return managerInfo
        }

        const fetchManagerHistory = async (leagueManagers) => {
          const requests = leagueManagers.map((manager) => {
            const url = `https://ancient-ocean-21689.herokuapp.com/https://fantasy.premierleague.com/api/entry/${manager.entry}/history/`
            return fetchManagerInfo(url)
            .then(a => a.json())
            .then(data => {
              return data
            })
          })
          return Promise.all(requests)
        }
        
        // This function works only when users come from landing page
        // currentGW gets its value from fetchInformation
        const fetchManagerPicks = async (leagueManagers) => {
          const requests = leagueManagers.map((manager) => {
            const url = `https://ancient-ocean-21689.herokuapp.com/https://fantasy.premierleague.com/api/entry/${manager.entry}/event/${currentGW}/picks/`
            return fetchManagerInfo(url)
            .then(a => a.json())
            .then(data => {
              return data
            })
          })
          return Promise.all(requests)
        }

        const fetchManagerTransferHistory = async (leagueManagers) => {
          const requests = leagueManagers.map((manager) => {
            const url = `https://ancient-ocean-21689.herokuapp.com/https://fantasy.premierleague.com/api/entry/${manager.entry}/transfers/`
            return fetchManagerInfo(url)
            .then(a => a.json())
            .then(data => {
              return data
            })
          })
          return Promise.all(requests)
        }

        async function fetchPickTransferHistory() {
          const history = await fetchManagerHistory(leagueManagers)
          .then(data => {
            let i = 0
            leagueManagers.forEach((manager => {
              leagueManagers[i].points = data[i].current
              latestGameweek = data[0].current.length
              i++
            }))
          })

          const picks = await fetchManagerPicks(leagueManagers)
          .then(data => {
            let i = 0
            leagueManagers.forEach((manager => {
              leagueManagers[i].picks = data[i]
              i++
            }))
          })

          const transfers = await fetchManagerTransferHistory(leagueManagers)
          .then(transfers => {
            let i = 0
            leagueManagers.forEach((manager => {
              leagueManagers[i].transfers = transfers[i].filter(el => el.event === latestGameweek)
              i++
            }))
          })     
        }
        
        fetchPickTransferHistory().then(() => dispatch({
        type: 'FETCHED_MANAGERS',
        payload: leagueManagers
      }));
    }
)}}

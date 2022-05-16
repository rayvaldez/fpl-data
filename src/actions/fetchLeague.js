

export function fetchLeague(leagueId) {

  let leagueManagers = {}
  let latestGameweek

  return (dispatch) => {
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

        fetchManagerHistory(leagueManagers)
        .then(data => {
          let i = 0
          leagueManagers.forEach((manager => {
            leagueManagers[i].points = data[i].current
            latestGameweek = data[0].current.length
            i++
          }))
        })

        fetchManagerTransferHistory(leagueManagers)
        .then(transfers => {
          let i = 0
          leagueManagers.forEach((manager => {
            leagueManagers[i].transfers = transfers[i].filter(el => el.event === latestGameweek)
            i++
          }))
        })
      })
      .then(() => dispatch({
        type: 'FETCH_MANAGERS',
        payload: leagueManagers
      }));
  }
}

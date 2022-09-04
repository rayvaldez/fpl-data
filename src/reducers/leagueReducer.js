export default function leagueReducer(state = { isLoading: false, managers: []}, action) {

  switch (action.type) {
    case 'FETCHING_MANAGERS':
      return {...state, isLoading: true };
    case 'FETCHED_MANAGERS':
      return {managers: action.payload, isLoading: false };
    default:
      return state;
  }
}

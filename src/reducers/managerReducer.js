export default function managerReducer(state = {manager: []}, action) {

  switch (action.type) {
    case 'FETCH_MANAGER':
      return {manager: action.payload}
    default:
      return state;
  }
}

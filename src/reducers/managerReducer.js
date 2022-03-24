export default function managersReducer(state = {managers: []}, action) {

  switch (action.type) {
    case 'FETCH_MANAGERS':
      return {managers: action.payload}
    default:
      return state;
  }
}

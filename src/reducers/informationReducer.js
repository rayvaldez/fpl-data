export default function informationReducer(state = {information: []}, action) {

  switch (action.type) {
    case 'FETCH_INFORMATION':
      return {information: action.payload}
    default:
      return state;
  }
}

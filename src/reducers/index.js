import { combineReducers } from 'redux';
import leagueReducer from './leagueReducer';
import managerReducer from './managerReducer';

export default combineReducers({
  leagueReducer,
  managerReducer
});

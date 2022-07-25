import { combineReducers } from 'redux';
import leagueReducer from './leagueReducer';
import managerReducer from './managerReducer';
import informationReducer from './informationReducer';

export default combineReducers({
  leagueReducer,
  managerReducer,
  informationReducer
});

import { combineReducers } from 'redux';
import sim from './sim';

const rootReducer = combineReducers({
  sim
});

export default (state, action) => {
  return rootReducer(state, action);
};

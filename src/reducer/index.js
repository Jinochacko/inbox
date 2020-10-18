import { combineReducers } from 'redux';
import appInbox from './messages';

const rootReducer = combineReducers({
  appInbox
});

export default (state, action) => {
  return rootReducer(state, action);
};

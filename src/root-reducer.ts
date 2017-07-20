import { combineReducers } from 'redux-immutable';

import usersReducer from './containers/Users/reducer';

export interface State {
  usersDomain: any
};

export const state = combineReducers({
  usersDomain: usersReducer
});

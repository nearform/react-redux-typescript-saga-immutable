import { fromJS } from 'immutable';

import {
  USERS_SAMPLE_FETCH,
  USERS_SAMPLE_FETCH_SUCCESS,
  USERS_SAMPLE_FETCH_ERROR
} from './actionTypes';

import { UserAction } from './model';

const initialState = fromJS({
  users: [],
  isLoading: false,
  isFetched: false
});

export default (state = initialState, action: UserAction) => {
  switch (action.type) {
    case USERS_SAMPLE_FETCH:
      return state
        .set('isLoading', true)
        .set('isFetched', false)
        .set('users', initialState.get('users'));
    case USERS_SAMPLE_FETCH_SUCCESS:
      return state
        .set('isLoading', false)
        .set('isFetched', true)
        .set('users', fromJS(action.payload));
    case USERS_SAMPLE_FETCH_ERROR:
      return state
        .set('isLoading', false)
        .set('isFetched', false)
        .set('users', initialState.get('users'));
    default:
      return state;
  }
};

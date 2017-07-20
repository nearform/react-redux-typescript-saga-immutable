import {
  USERS_SAMPLE_FETCH,
  USERS_SAMPLE_FETCH_SUCCESS,
  USERS_SAMPLE_FETCH_ERROR
} from './actionTypes';

import {
  User
} from './model';

export const fetch = () => {
  return {
    type: USERS_SAMPLE_FETCH
  };
};

export const fetchSuccess = (result: Array<User>) => {
  return {
    type: USERS_SAMPLE_FETCH_SUCCESS,
    payload: result
  };
};

export const fetchError = (error: Error) => {
  return {
    type: USERS_SAMPLE_FETCH_ERROR,
    payload: error
  };
};

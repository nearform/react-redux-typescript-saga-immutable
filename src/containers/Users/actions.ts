import { actionTypes as at } from './constants';
import { User } from './model';

export const fetch = () => {
  return {
    type: at.USERS_SAMPLE_FETCH
  };
};

export const fetchSuccess = (result: Array<User>) => {
  return {
    type: at.USERS_SAMPLE_FETCH_SUCCESS,
    payload: result
  };
};

export const fetchError = (error: Error) => {
  return {
    type: at.USERS_SAMPLE_FETCH_ERROR,
    payload: error
  };
};

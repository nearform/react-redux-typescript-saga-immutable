import { call, put, take } from 'redux-saga/effects';

import { fetchUsers } from './service';
import { actionTypes as at } from './constants';
import { fetchSuccess, fetchError } from './actions';
import { User } from './model';

export function* fetchUsersList(id: string) {
  try {
    const result: Array<User> = yield call(fetchUsers, id);

    yield put(fetchSuccess(result));
  } catch (err) {
    yield put(fetchError(err));
  }
}

export function* sampleWatcher() {
  while (true) {
    const { id } = yield take(at.USERS_SAMPLE_FETCH);

    yield call(fetchUsersList, id);
  }
}

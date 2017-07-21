import { createSelector } from 'reselect';

const getUsersDomain = () => (state: any) => state.get('usersDomain');

const selectUsers = () => createSelector(
  getUsersDomain(),
  usersState => usersState.get('users').toJS()
);

const selectIsLoading = () => createSelector(
  getUsersDomain(),
  usersState => usersState.get('isLoading')
);

const selectIsFetched = () => createSelector(
  getUsersDomain(),
  usersState => usersState.get('isFetched')
);

export {
  selectUsers,
  selectIsLoading,
  selectIsFetched
};

export default getUsersDomain;

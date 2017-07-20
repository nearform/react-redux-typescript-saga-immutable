import { createSelector } from 'reselect';

const selectUsersDomain = () => (state: any) => state.get('usersDomain');

const selectUsers = () => createSelector(
  selectUsersDomain(),
  usersState => usersState.get('users').toJS()
);

const selectIsLoading = () => createSelector(
  selectUsersDomain(),
  usersState => usersState.get('isLoading')
);

const selectIsFetched = () => createSelector(
  selectUsersDomain(),
  usersState => usersState.get('isFetched')
);

export {
  selectUsers,
  selectIsLoading,
  selectIsFetched
};

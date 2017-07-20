import { Store, createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { state, State } from './root-reducer';
import sagas from './root-saga';
import initialState from './root-state';

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const enhancer = compose(
  applyMiddleware(sagaMiddleware),
);

const store: Store<State> = createStore(
  state,
  initialState!,
  enhancer,
);

sagaMiddleware.run(sagas);

export default store;

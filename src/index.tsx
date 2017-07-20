import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { RouteMap } from './routes';
import store from './store';

import './index.css';

const Root = (
  <Provider store={store}>
    <BrowserRouter>
      <RouteMap />
    </BrowserRouter>
  </Provider>
);

render(
  Root,
  document.getElementById('root') as HTMLElement
);

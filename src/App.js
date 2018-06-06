import React from 'react';
import {hot} from 'react-hot-loader';
import {Provider} from 'mobx-react';
import {BrowserRouter} from 'react-router-dom';

import store from './store';
import Router from './router';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default hot(module)(App);

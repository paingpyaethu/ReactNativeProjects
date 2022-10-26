import React from 'react';
import {Provider} from 'react-redux';

import AppNavigator from './src/navigations/AppNavigator';
import {Store} from './src/stores/redux/Store';

const App = () => {
  return (
    <Provider store={Store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;

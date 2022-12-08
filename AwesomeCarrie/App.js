import React from 'react';
import SplashScreen from './src/screens/SplashScreen';

import {Provider} from 'react-redux';
import {store} from './src/stores/store';
import HomeScreen from './src/screens/HomeScreen';

const App = () => {
  return (
    <Provider store={store}>
      {/* <SplashScreen /> */}
      <HomeScreen />
    </Provider>
  );
};

export default App;

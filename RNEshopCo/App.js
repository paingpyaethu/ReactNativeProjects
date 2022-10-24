import React from 'react';
import {Provider} from 'react-redux';
import HomeScreen from './src/screens/Home/HomeScreen';
import {Store} from './src/stores/redux/Store';

const App = () => {
  return (
    <Provider store={Store}>
      <HomeScreen />
    </Provider>
  );
};

export default App;

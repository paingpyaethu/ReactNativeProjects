import React from 'react';
import {Provider} from 'react-redux';
import CustomToast from './src/components/molecules/CustomToast';
import {AxiosProvider} from './src/contexts/AxiosContext';

import AppNavigator from './src/navigations/AppNavigator';
import {Store} from './src/stores/slices/Store';

const App = () => {
  return (
    <Provider store={Store}>
      <AxiosProvider>
        <AppNavigator />
        <CustomToast />
      </AxiosProvider>
    </Provider>
  );
};

export default App;

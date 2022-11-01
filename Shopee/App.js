import React from 'react';

import LogoHeader from './src/components/atoms/LogoHeader';
import CustomToast from './src/components/molecules/CustomToast';

// AppNavigator
import AppNavigator from './src/navigation/AppNavigator';

// Redux
import {Provider} from 'react-redux';
import store from './src/store/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <LogoHeader />
      <AppNavigator />
      <CustomToast />
    </Provider>
  );
};
export default App;

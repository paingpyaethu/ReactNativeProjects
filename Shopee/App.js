import React from 'react';
import LogoHeader from './src/components/atoms/LogoHeader';

// AppNavigator
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  return (
    <>
      <LogoHeader />
      <AppNavigator />
    </>
  );
};
export default App;

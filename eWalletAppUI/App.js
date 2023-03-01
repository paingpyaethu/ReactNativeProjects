/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Button} from 'react-native';
import {appUpgradeVersionCheck} from 'app-upgrade-react-native-sdk';

const App = () => {
  const xApiKey = 'MWQzZjg1YzQtZmIyNS00ZDljLWIyYzUtNWQ3ZjdmMjk1YmNh'; // Your project key
  const appInfo = {
    appId: 'com.ewallet.app',
    appName: 'E-Wallet App',
    appVersion: '1.0.0',
    platform: 'android',
    environment: 'production',
  };

  const alertConfig = {
    title: 'Please Update',
    updateButtonTitle: 'Update Now',
  };

  appUpgradeVersionCheck(appInfo, xApiKey, alertConfig);
  return (
    <View
      style={{
        backgroundColor: '#a6acec',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 20, marginBottom: 20}}>E-WalletApp</Text>
      <Button title="Da Da" />
    </View>
  );
};

export default App;

/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Button} from 'react-native';

const App = () => {
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

import React, {useState} from 'react';
import {View, StyleSheet, Switch, Alert} from 'react-native';
import {Button} from './src/Components/Button';
import {ThemeContext} from './src/Context/ThemeContext';
import {myColors} from './src/Theme/Colors';

const App = () => {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={theme}>
      <View
        style={
          theme === 'light'
            ? styles.container
            : [styles.container, {backgroundColor: myColors.dark}]
        }>
        <Switch
          value={theme === 'light'}
          onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        />
        <Button
          isBlue
          title="3"
          onPress={() => {
            Alert.alert('hello');
          }}
        />
      </View>
    </ThemeContext.Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.light,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

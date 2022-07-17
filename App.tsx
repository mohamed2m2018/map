import React from 'react';
import MainNavigator from './src/navigation/MainNavigator';

import {LogBox} from 'react-native';
import {ThemeProvider} from './src/context/ThemeContext';

LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

const App = () => {
  return (
    <ThemeProvider>
      <MainNavigator />
    </ThemeProvider>
  );
};

export default App;

import React from 'react';
import MainNavigator from './src/navigation/MainNavigator';
import {ThemeProvider} from './src/context/ThemeContext';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <MainNavigator />
    </ThemeProvider>
  );
};

export default App;

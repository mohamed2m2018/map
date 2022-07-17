import React, {createContext, Dispatch, SetStateAction, useState} from 'react';
import AppColors, {IColors} from '../constants/colors';

interface ContextType {
  theme: 'light' | 'dark';
  setTheme: Dispatch<SetStateAction<'light' | 'dark'>>;
  colors: IColors;
}

const ThemeContext = createContext<ContextType>({
  theme: 'light',
  setTheme: () => {},
  colors: AppColors.lightTheme,
});

// Initiate context

interface Props {
  children: React.ReactNode;
}

const ThemeProvider = ({children}: Props) => {
  // Manage theme state
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const colors = theme === 'light' ? AppColors.lightTheme : AppColors.darkTheme;

  return (
    <ThemeContext.Provider value={{theme, setTheme, colors}}>
      {children}
    </ThemeContext.Provider>
  );
};

export {ThemeContext, ThemeProvider};

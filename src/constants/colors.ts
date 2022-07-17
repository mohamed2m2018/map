const colors = {
  lightTheme: {
    primary: '#ffffff',
    secondary: '#000000',
    tabBarBackground: '#ffffff',
    grey: 'grey',
  },
  darkTheme: {
    primary: '#444444',
    secondary: '#ffffff',
    tabBarBackground: '#000000',
    grey: 'grey',
  },
};

export interface IColors {
  primary: string;
  secondary: string;
  tabBarBackground: string;
  grey: string;
}

export default colors;

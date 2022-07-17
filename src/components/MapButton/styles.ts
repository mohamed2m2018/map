import {IColors} from './../../constants/colors';
import {StyleSheet} from 'react-native';

const makeStyles = (colors: IColors) =>
  StyleSheet.create({
    touchableContainer: {
      width: 45,
      height: 45,
      backgroundColor: colors.primary,
      borderRadius: 22.5,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default makeStyles;

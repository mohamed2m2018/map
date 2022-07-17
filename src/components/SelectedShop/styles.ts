import {IColors} from './../../constants/colors';
import {StyleSheet} from 'react-native';

const makeStyles = (colors: IColors) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.primary,
      height: 100,
      width: '100%',
      flexDirection: 'row',
      padding: 20,
      borderRadius: 10,
    },
    image: {
      width: 60,
      height: 60,
      marginRight: 20,
    },
    header: {
      fontSize: 25,
      color: colors.secondary,
    },
    subHeader: {
      color: colors.grey,
    },
  });

export default makeStyles;

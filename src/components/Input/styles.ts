import {IColors} from './../../constants/colors';
import {StyleSheet} from 'react-native';
const makeStyles = (colors: IColors) =>
  StyleSheet.create({
    searchContainer: {
      width: '90%',
      height: 45,
      flexDirection: 'row',
      justifyContent: 'center',
      backgroundColor: colors.primary,
      position: 'absolute',
      top: 70,
      zIndex: 10000,
      alignSelf: 'center',
      borderRadius: 10,
    },
    input: {
      width: '85%',
      height: 49,
      color: colors.secondary,
      fontSize: 13,
      alignSelf: 'center',
    },
    icon: {
      alignSelf: 'center',
      marginRight: 5,
    },
  });

export default makeStyles;

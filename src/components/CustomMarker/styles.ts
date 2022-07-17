import {StyleSheet} from 'react-native';
import {IColors} from '../../constants/colors';
const makeStyles = (colors: IColors) =>
  StyleSheet.create({
    markerSelcted: {
      width: 50,
      height: 50,
      backgroundColor: colors.primary,
      borderRadius: 25,
      borderWidth: 2,
      borderColor: colors.secondary,
      justifyContent: 'center',
      alignItems: 'center',
    },

    marker: {
      width: 40,
      height: 40,
      backgroundColor: colors.primary,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    innerMarkerImage: {
      width: 20,
      height: 20,
    },
    markerContainer: {
      height: 80,
      width: 80,
      borderRadius: 40,
      backgroundColor: 'transparent',
    },
  });

export default makeStyles;

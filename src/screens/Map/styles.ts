import {StyleSheet} from 'react-native';
import {IColors} from '../../constants/colors';
const makeStyles = (colors: IColors) =>
  StyleSheet.create({
    firstButton: {
      position: 'absolute',
      top: 140,
      right: 20,
      zIndex: 4000,
    },
    secondButton: {
      position: 'absolute',
      top: 200,
      right: 20,
      zIndex: 4000,
    },
    mapContainer: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
    },
    optionsContainer: {
      position: 'absolute',
      backgroundColor: colors.primary,
      top: 108,
      width: '90%',
      alignSelf: 'center',
      zIndex: 10000,
      paddingBottom: 10,
    },
    innerOptionsContainer: {
      width: '100%',
      marginLeft: 20,
    },
    selectionOption: {
      color: colors.secondary,
    },
    selectedShop: {
      position: 'absolute',
      bottom: 80,
      width: '80%',
      alignSelf: 'center',
    },
  });

export default makeStyles;

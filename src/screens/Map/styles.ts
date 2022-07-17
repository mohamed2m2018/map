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
    selectedShop: {
      position: 'absolute',
      bottom: 80,
      width: '80%',
      alignSelf: 'center',
    },
  });

export default makeStyles;

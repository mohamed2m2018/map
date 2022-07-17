import Geolocation, {
  GeolocationResponse,
} from '@react-native-community/geolocation';
import {Alert, Linking, PermissionsAndroid, Platform} from 'react-native';
import dictionary from '../constants/dictionary';
import {Place} from '../types/places';

export function handleNavigation(lat: number, long: number, place?: Place) {
  if (place) {
    Linking.canOpenURL(
      `https://www.google.com/maps/dir/?api=1&destination=${
        lat + place?.latitudeDifference
      },${long + place?.longitudeDifference}&travelmode=driving`,
    ).then(canOpen => {
      if (canOpen) {
        Linking.openURL(
          `https://www.google.com/maps/dir/?api=1&destination=${
            lat + place?.latitudeDifference
          },${long + place?.longitudeDifference}&travelmode=driving`,
        );
      } else {
        Alert.alert(dictionary.somethingWrong);
      }
    });
  } else {
    Alert.alert(dictionary.choosePlace);
  }
}

export function handleAndroidLocationPermission() {
  if (Platform.OS === 'android') {
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
  }
}

export const getUserCurrentLocation = (
  callback: (pos: GeolocationResponse) => void,
) => {
  Geolocation.setRNConfiguration({
    authorizationLevel: 'whenInUse',
    skipPermissionRequests: false,
  });
  const options =
    Platform.OS === 'android'
      ? {timeout: 5000}
      : {enableHighAccuracy: true, timeout: 5000, maximumAge: 1000};
  Geolocation.getCurrentPosition(
    pos => {
      callback(pos);
    },
    () => {
      Alert.alert(dictionary.noAccess);
    },
    options,
  );
};

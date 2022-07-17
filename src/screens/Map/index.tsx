import React, {useContext, useEffect, useState} from 'react';
import {
  ScrollView,
  TouchableOpacity,
  View,
  Image,
  Text,
  Keyboard,
  Dimensions,
} from 'react-native';
import Input from '../../components/Input';
import MapView, {Marker} from 'react-native-maps';
import SelectedShop from '../../components/SelectedShop';
import MapButton from '../../components/MapButton';
import {DARK_MODE_STYLE, PLACES_DATA} from '../../constants/map';
import {ThemeContext} from '../../context/ThemeContext';
import makeStyles from './styles';
import {
  getUserCurrentLocation,
  handleAndroidLocationPermission,
  handleNavigation,
} from '../../helpers/mapHelpers';
import {GeolocationResponse} from '@react-native-community/geolocation';
import {Place} from '../../types/places';

const Map: React.FC = () => {
  const {height, width} = Dimensions.get('window');

  const LATITUDE_DELTA = 0.021;
  const LONGITUDE_DELTA = LATITUDE_DELTA * (width / height);

  const {theme, setTheme, colors} = useContext(ThemeContext);
  const [mapReady, setMapReady] = useState<boolean>(false);
  const [position, setPosition] = useState<GeolocationResponse>();

  const mapRef = React.useRef<MapView | null>(null);

  const [selectedPlace, setSelectedPlace] = useState<Place>();
  const [searchResults, setsearchResults] = useState<Place[]>();
  const [searchValue, setSearchValue] = useState<string>();

  useEffect(() => {
    getUserCurrentLocation((pos: GeolocationResponse) => {
      setPosition(pos);
      if (mapReady) {
        mapRef?.current?.animateToRegion({
          ...pos?.coords,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        });
      }
    });
  }, [LONGITUDE_DELTA, mapReady]);

  const styles = makeStyles(colors);
  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  function handleChangeText(value: string) {
    const results = PLACES_DATA?.filter((place: Place) =>
      place?.name?.includes(value),
    );
    setsearchResults(results);
    setSearchValue(value);
  }

  function handleInputBlur() {
    setsearchResults([]);
  }

  function handleMapReady() {
    setMapReady(true);
    handleAndroidLocationPermission();
  }

  function handleOptionSelection(place: Place) {
    setSelectedPlace(place);
    setSearchValue(place?.name);
    Keyboard.dismiss();
  }

  return (
    <>
      <Input
        value={searchValue}
        onBlur={handleInputBlur}
        onChangeText={handleChangeText}
      />
      {!!searchResults?.length && (
        <ScrollView style={styles.optionsContainer}>
          <View style={styles.innerOptionsContainer}>
            {searchResults?.map((place: Place) => (
              <TouchableOpacity onPress={() => handleOptionSelection(place)}>
                <Text>{place?.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      )}

      <View style={styles.firstButton}>
        <MapButton name="swap" type="AntDesign" onPress={toggleTheme} />
      </View>
      <View style={styles.secondButton}>
        <MapButton
          onPress={() =>
            handleNavigation(
              position?.coords?.latitude || 0,
              position?.coords?.longitude || 0,
              selectedPlace,
            )
          }
          name="navigation"
          type="Feather"
        />
      </View>
      {position?.coords && (
        <MapView
          showsUserLocation
          ref={mapRef}
          onMapReady={handleMapReady}
          provider="google"
          initialRegion={{
            latitude: position?.coords?.latitude || 0,
            longitude: position?.coords?.longitude || 0,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}
          customMapStyle={theme === 'dark' ? DARK_MODE_STYLE : undefined}
          style={styles.mapContainer}>
          {PLACES_DATA.map((place: Place) => (
            <Marker
              key={place?.id}
              onPress={() => {
                setSelectedPlace(place);
                setSearchValue('');
              }}
              coordinate={{
                latitude:
                  (position?.coords?.latitude || 0) + place?.latitudeDifference,
                longitude:
                  (position?.coords?.longitude || 0) +
                  place.longitudeDifference,
              }}>
              <TouchableOpacity
                style={[
                  styles.marker,
                  place?.id === selectedPlace?.id && styles.markerSelcted,
                ]}>
                <Image
                  style={styles.innerMarkerImage}
                  source={{
                    uri: place?.imageOnMap,
                  }}
                />
              </TouchableOpacity>
            </Marker>
          ))}
        </MapView>
      )}
      <View style={styles.selectedShop}>
        {!!selectedPlace && (
          <SelectedShop
            shopName={selectedPlace?.name}
            description={selectedPlace?.description}
            imageUri={selectedPlace?.thumbnailImage}
          />
        )}
      </View>
    </>
  );
};

export default Map;

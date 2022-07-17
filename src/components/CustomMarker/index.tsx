import {View, TouchableOpacity, Image} from 'react-native';
import React, {useContext} from 'react';
import {Place} from '../../types/places';
import makeStyles from './styles';
import {ThemeContext} from '../../context/ThemeContext';

interface Props {
  isSelected: boolean;
  place: Place;
}

const CustomMarker: React.FC<Props> = ({isSelected, place}) => {
  const {colors} = useContext(ThemeContext);
  const styles = makeStyles(colors);
  return (
    <View style={styles.markerContainer}>
      <TouchableOpacity
        style={[styles.marker, isSelected && styles.markerSelcted]}>
        <Image
          style={styles.innerMarkerImage}
          source={{
            uri: place?.imageOnMap,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CustomMarker;

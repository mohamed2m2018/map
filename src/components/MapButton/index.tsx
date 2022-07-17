import React, {useContext} from 'react';
import {TouchableOpacity} from 'react-native';
import {TEST_IDS} from '../../constants/testIds';
import {ThemeContext} from '../../context/ThemeContext';
import AppIcon, {AppIconProps} from '../AppIcon';
import makeStyles from './styles';

interface Props extends AppIconProps {
  onPress: () => void;
}

const MapButton: React.FC<Props> = ({type, onPress, name}) => {
  const {colors} = useContext(ThemeContext);
  const styles = makeStyles(colors);
  return (
    <TouchableOpacity
      testID={TEST_IDS.MAP_BUTTON_TOUCHABLE}
      onPress={onPress}
      style={styles.touchableContainer}>
      <AppIcon type={type} name={name} size={25} color={colors.secondary} />
    </TouchableOpacity>
  );
};

export default MapButton;

import React, {useContext} from 'react';
import {TextInput, TextInputProps, View} from 'react-native';
import {ThemeContext} from '../../context/ThemeContext';
import AppIcon from '../AppIcon';
import makeStyles from './styles';

const SearchComponent: React.FC<TextInputProps> = props => {
  const {colors} = useContext(ThemeContext);
  const styles = makeStyles(colors);
  return (
    <View style={styles.searchContainer}>
      <AppIcon
        type="MaterialIcons"
        style={styles.icon}
        color={colors.grey}
        name="search"
        size={20}
      />
      <TextInput
        placeholderTextColor={'gray'}
        placeholder={'Search here'}
        style={styles.input}
        {...props}
      />
    </View>
  );
};

export default SearchComponent;

import React, {useContext} from 'react';
import {Image, Text, View} from 'react-native';
import {TEST_IDS} from '../../constants/testIds';
import {ThemeContext} from '../../context/ThemeContext';
import makeStyles from './styles';

interface Props {
  imageUri: string;
  shopName: string;
  description: string;
}

const SelectedShop: React.FC<Props> = props => {
  const {colors} = useContext(ThemeContext);
  const styles = makeStyles(colors);
  return (
    <View style={styles.container}>
      <Image
        testID={TEST_IDS.TEST_ID_IMAGE_SHOP}
        source={{uri: props?.imageUri}}
        resizeMode={'contain'}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text testID={TEST_IDS.TEST_ID_SHOP_NAME} style={styles.header}>
          {props?.shopName}
        </Text>
        <Text
          testID={TEST_IDS.TEST_ID_SHOP_DESCRIPTION}
          style={styles.subHeader}>
          {props?.description}
        </Text>
      </View>
    </View>
  );
};

export default SelectedShop;

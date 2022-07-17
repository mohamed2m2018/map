import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Map from '../screens/Map';
import AppIcon from '../components/AppIcon';
import {ThemeContext} from '../context/ThemeContext';
import Dummy from '../screens/Dummy';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  const {colors} = useContext(ThemeContext);
  return (
    <Tab.Navigator
      initialRouteName="Map"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors.tabBarBackground,
        },
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: () => (
            <AppIcon
              type="Feather"
              color={colors.secondary}
              name="compass"
              size={25}
            />
          ),
        }}
        component={Dummy}
        name="Explore"
      />
      <Tab.Screen
        component={Map}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <AppIcon
              type="Ionicons"
              color={colors.secondary}
              name="map"
              size={25}
            />
          ),
        }}
        name="Map"
      />
      <Tab.Screen
        component={Dummy}
        options={({navigation}) => ({
          tabBarButton: () => (
            <TouchableOpacity
              onPress={() => navigation?.navigate('Add')}
              style={styles.middleButton}>
              <AppIcon type="Entypo" color="white" name="plus" size={25} />
            </TouchableOpacity>
          ),
        })}
        name="Add"
      />
      <Tab.Screen
        component={Dummy}
        name="Notifications"
        options={{
          tabBarIcon: () => (
            <AppIcon
              type="Ionicons"
              color={colors.secondary}
              name="notifications-outline"
              size={25}
            />
          ),
        }}
      />
      <Tab.Screen
        component={Dummy}
        name="Account"
        options={{
          tabBarIcon: () => (
            <AppIcon
              type="MaterialCommunityIcons"
              color={colors.secondary}
              name="account-outline"
              size={25}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  middleButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FE3139',
    bottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

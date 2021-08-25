import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  BottomNavigation,
  BottomNavigationTab,
  Layout,
  Text,
} from '@ui-kitten/components';
import { HomeScreen } from './home/homeScreen';

const { Navigator, Screen } = createBottomTabNavigator();

const BottomTabBar = ({ navigation }) => (
  <BottomNavigation>
    <BottomNavigationTab title="Home" />
    <BottomNavigationTab title="Search" />
    <BottomNavigationTab title="Profile" />
    <BottomNavigationTab title="Settings" />
  </BottomNavigation>
);

const BottomNavigator = () => (
  <Navigator
    screenOptions={{
      cardStyle: { backgroundColor: '#222B45' },
    }}
    tabBar={(props) => <BottomTabBar {...props} />}
  >
    <Screen
      name="Home"
      component={HomeScreen}
      options={{ headerTitle: 'Login', headerShown: false }}
    />
  </Navigator>
);

export const RecordsNavigator = () => (
  <NavigationContainer>
    <BottomNavigator />
  </NavigationContainer>
);

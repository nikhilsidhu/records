import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
} from '@ui-kitten/components';
import { SafeAreaView, View } from 'react-native';
import { homeScreen } from './home/homeScreen';
import { searchScreen } from './search/searchScreen';
import { profileScreen } from './profile/profileScreen';
import { settingsScreen } from './settings/settingsScreen';

const { Navigator, Screen } = createBottomTabNavigator();

const HomeIcon = (props) => <Icon {...props} name="home-outline" />;
const SearchIcon = (props) => <Icon {...props} name="search-outline" />;
const ProfileIcon = (props) => <Icon {...props} name="person-outline" />;
const SettingsIcon = (props) => <Icon {...props} name="settings-outline" />;

const BottomTabBar = ({ navigation, state }) => {
  return (
    <View style={{ flex: 0, backgroundColor: '#222B45' }}>
      <SafeAreaView>
        <BottomNavigation
          selectedIndex={state.index}
          onSelect={(index) => navigation.navigate(state.routeNames[index])}
        >
          <BottomNavigationTab title="Home" icon={HomeIcon} />
          <BottomNavigationTab title="Search" icon={SearchIcon} />
          <BottomNavigationTab title="Profile" icon={ProfileIcon} />
          <BottomNavigationTab title="Settings" icon={SettingsIcon} />
        </BottomNavigation>
      </SafeAreaView>
    </View>
  );
};

const BottomNavigator = () => (
  <Navigator
    screenOptions={{
      cardStyle: { backgroundColor: '#222B45' },
    }}
    tabBar={(props) => <BottomTabBar {...props} />}
  >
    <Screen
      name="Home"
      component={homeScreen}
      options={{ headerTitle: 'Home', headerShown: false }}
    />
    <Screen
      name="Search"
      component={searchScreen}
      options={{ headerTitle: 'Search', headerShown: false }}
    />
    <Screen
      name="Profile"
      component={profileScreen}
      options={{ headerTitle: 'Profile', headerShown: false }}
    />
    <Screen
      name="Settings"
      component={settingsScreen}
      options={{ headerTitle: 'Settings', headerShown: false }}
    />
  </Navigator>
);

export const RecordsNavigator = () => (
  <NavigationContainer>
    <BottomNavigator />
  </NavigationContainer>
);

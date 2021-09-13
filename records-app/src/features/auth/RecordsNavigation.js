import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
  Layout,
  Text,
} from '@ui-kitten/components';
import { SafeAreaView } from 'react-native';
import { SearchStackScreen } from './search/searchScreen';
import { ProfileStackScreen } from './profile/profileScreen';
import { HomeStackScreen } from './home/homeScreen';
import { settingsScreen } from './settings/settingsScreen';
import { default as theme } from '../../../assets/records-theme.json';

const { Navigator, Screen } = createBottomTabNavigator();

const BottomTabBar = ({ navigation, state }) => {
  const pulseIconRef = React.useRef();

  const getBottomIcon = (props) => {
    return (
      <Icon
        {...props}
        ref={pulseIconRef}
        animation="pulse"
        fill={theme['color-basic-100']}
        name={props.iconName}
      />
    );
  };

  return (
    <Layout>
      <SafeAreaView>
        <BottomNavigation
          selectedIndex={state.index}
          onSelect={(index) => navigation.navigate(state.routeNames[index])}

          //TODO: pop to top
          // onSelect={(index) => {
          //   state.index === index
          //     ? navigation.popToTop()
          //     : navigation.navigate(state.routeNames[index]);
          // }}
        >
          <BottomNavigationTab
            title={(evaProps) => <Text category="s2">Home</Text>}
            icon={getBottomIcon({ iconName: 'home-outline' })}
          />
          <BottomNavigationTab
            title={(evaProps) => <Text category="s2">Search</Text>}
            icon={getBottomIcon({ iconName: 'search-outline' })}
          />
          <BottomNavigationTab
            title={(evaProps) => <Text category="s2">Profile</Text>}
            icon={getBottomIcon({ iconName: 'person-outline' })}
          />
          <BottomNavigationTab
            title={(evaProps) => <Text category="s2">Settings</Text>}
            icon={getBottomIcon({ iconName: 'settings-outline' })}
          />
        </BottomNavigation>
      </SafeAreaView>
    </Layout>
  );
};

const BottomNavigator = () => (
  <Navigator tabBar={(props) => <BottomTabBar {...props} />}>
    <Screen
      name="HomeStack"
      component={HomeStackScreen}
      options={{ headerTitle: 'Home', headerShown: false }}
    />
    <Screen
      name="SearchStack"
      component={SearchStackScreen}
      options={{ headerTitle: 'Search', headerShown: false }}
    />
    <Screen
      name="ProfileStack"
      component={ProfileStackScreen}
      options={{ headerTitle: 'Profile', headerShown: false }}
    />
    <Screen
      name="Settings"
      component={settingsScreen}
      options={{ headerTitle: 'Settings', headerShown: false }}
    />
  </Navigator>
);

// TODO: pass in getMusicDetails as prop to screens

export const RecordsNavigator = () => (
  <NavigationContainer>
    <BottomNavigator />
  </NavigationContainer>
);

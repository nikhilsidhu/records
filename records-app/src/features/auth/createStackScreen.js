import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { getMusicDetails } from './musicDetails/musicDetailsScreen';

const ScreenStack = createStackNavigator();

export const StackScreen = ({ recordsScreen, screenName }) => {
  const musicDetails = getMusicDetails(ScreenStack);

  return (
    <ScreenStack.Navigator screenOptions={{ headerShown: false }}>
      <ScreenStack.Screen component={recordsScreen} name={screenName} />
      {musicDetails}
    </ScreenStack.Navigator>
  );
};

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { getMusicDetails } from './musicDetails/musicDetailsScreen';

const ScreenStack = createStackNavigator();

export const StackScreen = ({ recordsScreen, screenName }) => {
  const musicDetails = getMusicDetails(ScreenStack);

  return (
    <ScreenStack.Navigator
      screenOptions={{
        presentation: 'modal',
        cardStyle: { backgroundColor: '#222B45' },
        headerStyle: {
          backgroundColor: '#222B45',
        },
        headerTitleStyle: { color: 'white' },
      }}
    >
      <ScreenStack.Screen
        component={recordsScreen}
        name={screenName}
        options={{ headerShown: 'false' }}
      />
      {musicDetails}
    </ScreenStack.Navigator>
  );
};

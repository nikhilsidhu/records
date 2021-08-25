import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from './login/loginScreen';
import { SignupScreen } from './signup/signupScreen';

const { Navigator, Screen } = createStackNavigator();

const OnboardingNavigator = () => (
  <Navigator
    screenOptions={{
      presentation: 'modal',
      cardStyle: { backgroundColor: '#222B45' },
    }}
  >
    <Screen
      options={{ headerTitle: 'Login', headerShown: false }}
      name="Login"
      component={LoginScreen}
    />
    <Screen
      options={{ headerTitle: 'Signup', headerShown: false }}
      name="Signup"
      component={SignupScreen}
    />
  </Navigator>
);

export const LoginNavigator = () => (
  <NavigationContainer>
    <OnboardingNavigator />
  </NavigationContainer>
);

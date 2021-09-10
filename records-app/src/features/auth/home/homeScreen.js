import React from 'react';
import { Button, Layout } from '@ui-kitten/components';
import { StackScreen } from '../createStackScreen';

const homeScreen = ({ navigation }) => {
  return (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        size="large"
        onPress={() => {
          navigation.navigate('Music Details');
        }}
      >
        Login with Spotify
      </Button>
    </Layout>
  );
};

export const HomeStackScreen = () => {
  return <StackScreen recordsScreen={homeScreen} screenName="Home" />;
};

import React from 'react';
import { Button, Layout } from '@ui-kitten/components';

export const homeScreen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Button size="large" onPress={() => {}}>
      Login with Spotify
    </Button>
  </Layout>
);

import React from 'react';
import { Provider } from 'react-redux';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { LoginNavigator } from './src/features/noAuth/LoginNavigation';
import { RecordsNavigator } from './src/features/auth/RecordsNavigation';
import store from './src/app/store';

const isSignedIn = true;

export default () => (
  <Provider store={store}>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.dark}>
      {isSignedIn ? <RecordsNavigator /> : <LoginNavigator />}
    </ApplicationProvider>
  </Provider>
);

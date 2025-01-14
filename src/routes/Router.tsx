import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppStack} from './AppStack';

export function Router() {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}

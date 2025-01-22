import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppStack} from './AppStack';
import BootSplash from "react-native-bootsplash";
export function Router() {
  return (
    <NavigationContainer  onReady={() => BootSplash.hide({fade: true})}>
      <AppStack />
    </NavigationContainer>
  );
}

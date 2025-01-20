import 'react-native-gesture-handler';
import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {ThemeProvider} from '@shopify/restyle';
import theme from '@theme/theme';
import {Router} from '@routes/Router';
export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle="dark-content"
          translucent
          backgroundColor="transparent"
        />
        <Router />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

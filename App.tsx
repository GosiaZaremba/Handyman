/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {ReactNode} from 'react';
import {StyleSheet, View} from 'react-native';
import StorybookUIRoot from './storybook';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {
  HandymenListScreen,
  PickAHandymanScreen,
  SignInScreen,
  SignUpScreen,
  WelcomeScreen,
} from './components/screens';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const Stack = createNativeStackNavigator();

const App: () => ReactNode = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Welcome Screen" component={WelcomeScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Sign Up" component={SignUpScreen} />
        <Stack.Screen name="Pick A Handyman" component={PickAHandymanScreen} />
        <Stack.Screen name="Handymen List" component={HandymenListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

// export default StorybookUIRoot;

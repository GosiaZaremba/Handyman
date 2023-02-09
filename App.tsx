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
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {SignInScreen, SignUpScreen, DrawerScreen} from './components/screens';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

export type RootTabParamList = {
  SignIn: undefined;
  WelcomeScreen: undefined;
  SignUp: undefined;
  PickAHandyman: undefined;
  HandymenList: undefined;
  HireHandyman: undefined;
};

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList>;
  SignIn: undefined;
  WelcomeScreen: undefined;
  SignUp: undefined;
  PickAHandyman: undefined;
  HandymenList: undefined;
  HireHandyman: undefined;
};

export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator();

const App: () => ReactNode = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="DrawerScreen" component={DrawerScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

// export default StorybookUIRoot;

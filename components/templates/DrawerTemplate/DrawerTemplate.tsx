import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Colors} from '../../../constants/colors';
import {NavigationContainer} from '@react-navigation/native';
import {WelcomeScreen} from '../../screens';
import styles from './DrawerTemplate.styles';
import {ImageBackground} from 'react-native';
import {DrawerContent} from '../../organisms/DrawerContent/DrawerContent';

export type Props = {};

const Drawer = createDrawerNavigator();

export const DrawerTemplate: React.FC<Props> = ({}) => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName={'Welcome'}
        drawerContent={DrawerContent}
        screenOptions={{
          //   headerTitle: false,
          swipeEnabled: true,
          //   gestureEnabled: true,
          drawerPosition: 'left',
          headerStyle: styles.headerStyle,
          headerTintColor: 'red',
          headerTitleStyle: styles.headerTitleStyle,
          drawerStyle: styles.drawerStyle,
          drawerActiveTintColor: Colors.star.gold,
        }}>
        <Drawer.Screen
          name="Login"
          component={WelcomeScreen}
          options={{drawerLabel: 'Welcome', title: 'Welcome'}}
        />
        {/* <Drawer.Screen
          name="Register"
          component={RegisterScreen}
          options={{drawerLabel: 'Register', title: 'Register'}}
        />
        <Drawer.Screen
          name="RecoverPassword"
          component={RecoverPasswordScreen}
          options={{drawerLabel: 'Recover Password', title: 'Recover Password'}}
        /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

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
        name="Welcome Screen"
        component={WelcomeScreen}
        options={{drawerLabel: 'Welcome', title: 'Welcome'}}
      />
      {/* <Drawer.Screen
          name="Profile"
          component={ProfileScreen}
        />
        <Drawer.Screen
          name="Projects"
          component={RecoverPasswordScreen}
        /> 
        <Drawer.Screen
          name="Message"
          component={ProfileScreen}
        />
        <Drawer.Screen
          name={'Help Video'}
          component={HelpVideoScreen}
        />
        <Drawer.Screen
          name='{Share}'
          component={ShareScreen}
        />
        <Drawer.Screen
          name={'Rate App'}
          component={RateAppScreen}
        /> 
        <Drawer.Screen
          name={'Contact Us'}
          component={ContactUsScreen}
        />
        <Drawer.Screen
          name={'Settings'}
          component={SettingsScreen}
        />
        */}
    </Drawer.Navigator>
  );
};

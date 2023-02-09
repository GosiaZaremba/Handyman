import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  HandymenListScreen,
  HireHandymanScreen,
  PickAHandymanScreen,
  WelcomeScreen,
} from '../../screens';
import styles from './DrawerTemplate.styles';
import {DrawerContent} from '../../organisms/DrawerContent/DrawerContent';

export type Props = {
  photoUrl: any;
  userName: string;
  userLocation: string;
  onPressLogOut: () => void;
};

const Drawer = createDrawerNavigator();

export const DrawerTemplate: React.FC<Props> = ({
  photoUrl,
  userName,
  userLocation,
  onPressLogOut,
}) => {
  return (
    <Drawer.Navigator
      drawerContent={() => (
        <DrawerContent
          {...{
            photoUrl: photoUrl,
            userName: userName,
            userLocation: userLocation,
            onPressLogOut: onPressLogOut,
          }}
        />
      )}
      screenOptions={{
        swipeEnabled: true,
        drawerPosition: 'left',
        headerStyle: styles.headerStyle,
        headerTitleStyle: styles.headerTitleStyle,
        drawerStyle: styles.drawerStyle,
        headerShown: false,
      }}>
      <Drawer.Screen name="Welcome Screen" component={WelcomeScreen} />
      <Drawer.Screen name="PickAHandyman" component={PickAHandymanScreen} />
      <Drawer.Screen name="HandymenList" component={HandymenListScreen} />
      <Drawer.Screen name="HireHandyman" component={HireHandymanScreen} />
    </Drawer.Navigator>
  );
};

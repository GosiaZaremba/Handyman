import React from 'react';
import {
  createDrawerNavigator,
  DrawerNavigationProp,
} from '@react-navigation/drawer';
import {
  HandymenListScreen,
  HireHandymanScreen,
  PickAHandymanScreen,
  WelcomeScreen,
} from '../../screens';
import styles from './DrawerTemplate.styles';
import {DrawerContent} from '../../organisms/DrawerContent/DrawerContent';
import {ImageSourcePropType} from 'react-native';
import {NavigatorScreenParams} from '@react-navigation/native';

export type Props = {
  photoUrl: ImageSourcePropType | undefined;
  userName: string;
  userLocation: string;
  onPressLogOut: () => void;
};

export type DrawerTabParamList = {
  WelcomeScreen: undefined;
  PickAHandyman: undefined;
  HandymenList: undefined;
  HireHandyman: undefined;
};

export type DrawerParamList = {
  Root: NavigatorScreenParams<DrawerTabParamList>;
  WelcomeScreen: undefined;
  PickAHandyman: undefined;
  HandymenList: undefined;
  HireHandyman: undefined;
};

export type DrawerNavProp = DrawerNavigationProp<DrawerParamList>;

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
        headerTitleStyle: styles.headerTitleStyle,
        drawerStyle: styles.drawerStyle,
        headerShown: false,
      }}>
      <Drawer.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Drawer.Screen
        name="PickAHandymanScreen"
        component={PickAHandymanScreen}
      />
      <Drawer.Screen name="HandymenListScreen" component={HandymenListScreen} />
      <Drawer.Screen name="HireHandymanScreen" component={HireHandymanScreen} />
    </Drawer.Navigator>
  );
};
